<?php

namespace App\Http\Controllers\Payment;

use App\Models\Address;
use App\Models\Order;
use App\Models\OrderPayment;
use App\Models\PaymentOnline;
use App\Models\UserPaymentCart;
use App\Notifications\PaymentStatusNotification;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use net\authorize\api\contract\v1 as AnetAPI;
use net\authorize\api\controller as AnetController;
use GuzzleHttp\Client;

class AuthorizePaymentController extends Controller
{

    protected $card;
    protected $customer;
    protected $address;
    protected $billingAddress;
    protected $marchant;


    public function charge(Request $request)
    {
        $request->validate( [
            'card_number' => 'required|min:10',
            'cvc' => 'required|min:3',
            'expire_month' => 'required',
            'expire_year' => 'required',
            'gateway_id' => 'required',
            'order_id' => 'required',
            'amount' => 'required'
        ] );
        $this->customer = auth()->user();
        $this->address = $request->address;
        $this->billingAddress = $request->address;
        $conversion_rate = $request->currency == 'USD' ? 1 : $request->rate;
        /*payment gateway information*/
        $payment_info = PaymentOnline::findOrFail( $request->gateway_id );

        /*create transaction type with card information also amount is included*/
        $transactionRequestType = $this->setTransaction( $request->all() );

        /*make request to authorize.net for payment*/
        $controller = new AnetController\CreateTransactionController(
            $this->createRequest( $transactionRequestType, $payment_info )
        );

        /*get the response back from authorize.net*/
        $response = $controller->executeWithApiResponse(
            \net\authorize\api\constants\ANetEnvironment::SANDBOX //change "SANDBOX" to "PRODUCTION" for prodution server
        );

        /*working with response*/
        if (!is_null( $response )) {
            $tresponse = $response->getTransactionResponse();
            if (!is_null( $tresponse ) && (($tresponse->getResponseCode() == "1") || (($tresponse->getMessages()[0] && $tresponse->getMessages()[0]->getCode() == 253) && $tresponse->getResponseCode() == 4))) {
                //Store order information
                $this->storePaymentInfo( $request->order_id, $payment_info, $tresponse, [
                    'conversion_rate' => $conversion_rate,
                    'gateway_charge_amount' => $request->gateway_charge_amount,
                    'currency' => $request->currency,
                    'amount' => $request->amount,
                    'exp_year' => $request->expire_year,
                    'exp_month' => $request->expire_month,
                    'last4' => substr( $request->card_number, -4 )
                ] );

                $order = Order::find( $request->order_id );
                $order
                    ->user
                    ->notify( (new PaymentStatusNotification(
                        $tresponse,
                        $order,
                        'authorize',
                        $request->gateway_charge_amount )
                    )->delay( 5 ) );

                return response()->json( [
                    "status" => true,
                    "message" => trans( 'api.payment-added' ),
                    'order_id' => $request->order_id
                ] );
            } else {
                Order::withoutEvents(function () use ($request){
                    $order = Order::find($request->order_id);
                    $order->deleteOrder();
                });
                return response()->json( ["status" => false, "message" => $response->getMessages()->getMessage()] );
            }
        }
        Order::withoutEvents(function () use ($request){
            $order = Order::find($request->order_id);
            $order->deleteOrder();
        });
        return response()->json( ["status" => false, "message" => "Transaction failer"] );
    }


    public function validateCard($data, $store = true)
    {
        /*set all variable*/
        $payment_info = PaymentOnline::where( "alias", "=", 'authorize' )->first();
        $address = $data["auth"]->defaultAddress;
        $this->billingAddress = Address::find( $data['billing_address_id'] );
        $this->card = $data;
        $this->customer = $data["auth"];

        //create customer request
        $customerRequest = $this->createCustomerRequest( $payment_info );
        $card = [];
        // Create the controller and get the response
        $controller = new AnetController\CreateCustomerProfileController( $customerRequest );
        $response = $controller->executeWithApiResponse( \net\authorize\api\constants\ANetEnvironment::SANDBOX );
        if (!is_null( $response ) && ($response->getMessages()->getResultCode() == "Ok")) {
            if ($store) {
                $card = $this->storeCard( $data["gateway_id"], $data, isset( $data["is_active"] ) ? 1 : 0 );
            }
            return response()->json( ["status" => true, "message" => "Card validate successfully", "data" => $card] );
        }
        return response()->json( ["status" => false, "message" => $response->getMessages()] );
    }

    public function setMarchant($marchant)
    {
        $merchantAuthentication = new AnetAPI\MerchantAuthenticationType();
        $merchantAuthentication->setName( $marchant->secret_id );
        $merchantAuthentication->setTransactionKey( $marchant->secret_token );
        return $merchantAuthentication;
    }

    public function setCard($card)
    {
        $creditCard = new AnetAPI\CreditCardType();
        $creditCard->setCardNumber( str_replace( " ", '', $card["card_number"] ) );
        $expiry = $card["expire_year"] . '-' . $card["expire_month"];
        $creditCard->setExpirationDate( $expiry );
        $creditCard->setCardCode( $card["cvc"] );
        return $creditCard;
    }

    public function setPaymentCard($card)
    {
        $paymentOne = new AnetAPI\PaymentType();
        $paymentOne->setCreditCard( $this->setCard( $card ) );
        return $paymentOne;
    }

    public function setTransaction($data)
    {
        // Create a transaction
        $transactionRequestType = new AnetAPI\TransactionRequestType();
        $transactionRequestType->setTransactionType( "authCaptureTransaction" );
        $transactionRequestType->setAmount( $data["amount"] );
        $transactionRequestType->setBillTo( $this->setBillAddress( $this->billingAddress ) );
        $transactionRequestType->setPayment( $this->setPaymentCard( $data ) );


        $customerData = new AnetAPI\CustomerDataType();
        $customerData->setType( "individual" );
        $customerData->setEmail( $this->customer->email );
        $transactionRequestType->setCustomer( $customerData );

        return $transactionRequestType;
    }

    public function createRequest($transactionRequestType, $marchant)
    {
        $refId = 'ref' . time();
        $request = new AnetAPI\CreateTransactionRequest();
        $request->setMerchantAuthentication( $this->setMarchant( $marchant ) );
        $request->setRefId( $refId );
        $request->setTransactionRequest( $transactionRequestType );
        return $request;
    }

    public function createCustomerRequest($marchant)
    {
        $refId = 'ref' . time();
        $request = new AnetAPI\CreateCustomerProfileRequest();
        $request->setMerchantAuthentication( $this->setMarchant( $marchant ) );
        $request->setRefId( $refId );
        $request->setProfile( $this->setCustomerProfile() );
        return $request;
    }

    public function setCustomerProfile()
    {
        $payment_profiles[] = $this->setPaymentProfile();


        $customerProfile = new AnetAPI\CustomerProfileType();
        $customerProfile->setDescription( "One time payment" );
        $customerProfile->setMerchantCustomerId( "M_" . time() );
        $customerProfile->setEmail( $this->customer->email );
        $customerProfile->setpaymentProfiles( $payment_profiles );
        if (!empty( $this->address )) {
            $shipping_profiles[] = $this->setShippingAddress( $this->address );
            $customerProfile->setShipToList( $shipping_profiles );
        }
        return $customerProfile;
    }

    public function setPaymentProfile()
    {
        $paymentProfile = new AnetAPI\CustomerPaymentProfileType();
        $paymentProfile->setCustomerType( 'individual' );
        if (!empty( $this->billingAddress )) {
            $paymentProfile->setBillTo( $this->setBillAddress( $this->billingAddress ) );
        }
        $paymentProfile->setPayment( $this->setPaymentCard( $this->card ) );
        $paymentProfile->setDefaultpaymentProfile( true );
        return $paymentProfile;
    }

    public function setBillAddress($address)
    {
        $billTo = new AnetAPI\CustomerAddressType();
        if (!empty( $address )) {
            $name = explode( " ", $address->full_name );
            $billTo->setFirstName( $name[0] );
            $billTo->setLastName( isset( $name[1] ) ? $name[1] : $name[0] );
            //$billTo->setCompany("Xorrent");
            $billTo->setAddress( substr( $address->address, 0, 10 ) );
            $billTo->setCity( $address->city );
            $billTo->setState( optional( $address->state )->title );
            $billTo->setZip( $address->zip_code );
            $billTo->setCountry( optional( $address->country )->title );
            if ($address->phone) {
                $phones = json_decode( $address->phone, TRUE );
                if (count( $phones ))
                    $billTo->setPhoneNumber( $phones[0]['phone'] );
            }
        }
        return $billTo;
    }

    public function setShippingAddress($address)
    {
        $customerShippingAddress = new AnetAPI\CustomerAddressType();
        if (!empty( $address )) {
            $name = explode( " ", $address->full_name );
            $customerShippingAddress->setFirstName( $name[0] );
            $customerShippingAddress->setLastName( isset( $name[1] ) ? $name[1] : $name[0] );
            $customerShippingAddress->setCompany( "Xorrent" );
            $customerShippingAddress->setAddress( substr( $address->address, 0, 10 ) );
            $customerShippingAddress->setCity( $address->city );
            $customerShippingAddress->setState( optional( $address->state )->title );
            $customerShippingAddress->setZip( $address->zip_code );
            $customerShippingAddress->setCountry( optional( $address->country )->title );
            $customerShippingAddress->setPhoneNumber( $address->phone );
        }
        return $customerShippingAddress;
    }

    public function storePaymentInfo($order, $payment_info, $charge, $rest)
    {
        $data = [
            'order_id' => $order,
            'payment_method_id' => $payment_info->payment_method_id,
            'gateway_id' => $payment_info->id,
            'charge_id' => $charge->getTransId(),
            'amount' => $rest["amount"],
            'currency' => $rest["currency"],
            'create_at' => date( 'Y-m-d' ),
            'expire_at' => $rest["exp_year"] . "-" . $rest["exp_month"],
            'visible_4_digit' => $rest["last4"],
            'status' => 'captured',
            'conversion_rate' => $rest["conversion_rate"],
            'gateway_charge_amount' => $rest["gateway_charge_amount"]
        ];

        return OrderPayment::create( $data );
    }

    public function storeCard($gateway_id, $data, $active)
    {
        if ($active == 1) {
            UserPaymentCart::where( "user_id", "=", auth()->id() )->update( [
                "is_active" => 0
            ] );
        }
        $cards = [
            'user_id' => auth()->id(),
            'gateway_id' => $gateway_id,
            'card_number' => $data["card_number"],
            'cvc' => $data["cvc"],
            'card_bank' => "",
            'is_verify' => 1,
            'assign_amount' => 0.0,
            'amount' => 0.0,
            'currency' => "usd",
            'create_at' => date( "Y-m-d h:i:s" ),
            'expire_at' => $data["expire_year"] . "-" . $data["expire_month"],
            'is_active' => $active,
            'address_id' => $data["billing_address_id"]
        ]; // card data
        return UserPaymentCart::updateOrCreate( ['card_number' => $data["card_number"]], $cards ); //update or create card
    }

    public function getBankInfo($card_number)
    {
        $client = new Client();
        try {
            $response = $client->get( "https://lookup.binlist.net/" . substr( $card_number, "0", "8" ) )
                ->getBody()->getContents();
            $result = json_decode( $response );
            return $result->brand;
        } catch (\Exception $exception) {
            return 'master card';
        }

    }


    //refund transaction
    public function refundCreditCard($card)
    {
        $creditCard = new AnetAPI\CreditCardType();
        $creditCard->setCardNumber($card->visible_4_digit);
        $creditCard->setExpirationDate($card->expire_at);
        return $creditCard;
    }

    public function refundPaymentOne($card)
    {
        $paymentOne = new AnetAPI\PaymentType();
        $paymentOne->setCreditCard($this->refundCreditCard($card));
        return $paymentOne;
    }
    
    public function refundTransactionRequest($amount, $card)
    {
        $transactionRequest = new AnetAPI\TransactionRequestType();
        $transactionRequest->setTransactionType( "refundTransaction");
        $transactionRequest->setAmount($amount);
        $transactionRequest->setPayment($this->refundPaymentOne($card));
        $transactionRequest->setRefTransId($card->charge_id);
        return $transactionRequest;
    }

    public function refundRequest($amount, $card)
    {
        $request = new AnetAPI\CreateTransactionRequest();
        $request->setMerchantAuthentication($this->setMarchant($this->marchant));
        $request->setRefId('ref' . time());
        $request->setTransactionRequest( $this->refundTransactionRequest($amount, $card));
        return $request;
    }

    public function refundTransaction($amount, $payment_id) {
        $card = OrderPayment::with("online", "refunds")->findOrFail($payment_id);
        $totalRefund = $card->refunds != null ? $card->refunds->sum("refund_amount") : 0;

        if (($amount + $totalRefund) > ($card->amount - $card->gateway_charge_amount)){
            return [
                'status' => false,
                'message' => trans('api.refundError')
            ];
        }

        $this->marchant = $card->online;
        $controller = new AnetController\CreateTransactionController($this->refundRequest($amount, $card));
        $response = $controller->executeWithApiResponse(
            \net\authorize\api\constants\ANetEnvironment::SANDBOX //chnage it to PRODUCTION
        );

        if (!is_null($response) && $response->getMessages()->getResultCode() == "Ok"){
            $tresponse = $response->getTransactionResponse();
            if (!is_null($tresponse) && $tresponse->getResponseCode()){
                return [
                    "status" => true,
                    "message" => $tresponse->getMessages()[0]->getDescription()
                ];
            }else{
                return [
                    "status" => false,
                    "message" => $tresponse->getErrors()[0]->getErrorText()
                ];
            }
        }else{
            $tresponse = $response->getTransactionResponse();
            if (!is_null($tresponse) && $tresponse->getErrors() != null){
                return [
                    "status" => false,
                    "message" => $tresponse->getErrors()[0]->getErrorText()
                ];
            }else{
                return [
                    "status" => false,
                    "message" => $response->getMessages()->getMessage()[0]->getText()
                ];
            }
        }
    }


}
