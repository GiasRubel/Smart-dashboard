<?php
namespace App\Traits;
use App\Models\Currency;
use App\Models\PaymentMethod;
use App\Models\PaymentOnline;
use App\Models\User;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception;
use GuzzleHttp\Exception\GuzzleException;
use App\Http\Controllers\Shipping\ShpingAPIController;
use Illuminate\Database\Eloquent\ModelNotFoundException;

trait OAC{
    /**
     * @param $itemTotal
     * $item total is subtotal without tax, service charge and so on
     * @return float|int
     */
    public function taxUSA($itemTotal){
        return $itemTotal * config('settings.taxPercentage');
    }

    public function taxBD($itemTotal){
        return 0;
    }

    /**
     * @param $itemTotal
     * @return \Illuminate\Config\Repository|mixed
     * $item total is subtotal without tax, service charge and so on
     */
    public function royaltyCharge($itemTotal){
        $result =  config('settings.royalty_charge_percentage') * $itemTotal;
        return $result > config("settings.maximum_royalty_charge") ? config("settings.maximum_royalty_charge") : $result;
    }

    /**
     * @param $gateWay
     * @param $grandTotal
     * @return \Illuminate\Config\Repository|mixed
     */
    public function gatewayCharge($gateWay, $grandTotal){
        $arr = [
            "sslcommerz" => 'sslCommerz',
            'stripe' => 'stripe',
            'american-express' => 'americanExpress',
            'authorize' => 'authorize'
        ];
        $extra = [
            "sslcommerz" => 0,
            'stripe' => .30,
            'american-express' => 0,
            'authorize' => .30
        ];
        return ($grandTotal * config('settings.'.$arr[$gateWay])) + $extra[$gateWay];
    }

    /**
     * @param $itemTotal
     * @return float|\Illuminate\Config\Repository|int|mixed
     */
    public function insuranceAmount($itemTotal){
        $insurance_amount = $itemTotal * config( 'settings.insurancePerItem' );
        return $insurance_amount = $insurance_amount < config( 'settings.least_insurance' ) ? config( 'settings.least_insurance' ) : $insurance_amount;
    }

    /**
     * @param $rate
     * @param $grandTotal
     * it will convert the currency to user target currency rate
     * @return float|int
     */
    public function currencyConverter($rate, $grandTotal){
        return $rate * $grandTotal;
    }

    /**
     * @param string $currency
     * currency rate depends on currency and base currency is defined in payment config page.
     * @return mixed|\Psr\Http\Message\ResponseInterface
     */
    public function currencyRate($currency = 'BDT'){
        if ($currency == config('payment.base_currency')){
            return response()->json(['status' => true, 'value' => 1, 'currency' => $currency]);
        }
        $result = Currency::where('code', $currency)->first();
        if ($result && $result->expire_at >= Carbon::now()){
            return response()->json(['status' => true, 'value' => $result->usd_conversion_amount, 'currency' => $result->code]);
        }
        $base = config('payment.base_currency');
        $conversion = $base."_".$currency;
        $apiUrl = config('payment.currency_url').$conversion;
        try{
            $client = new Client;
            $response = $client->request('GET', $apiUrl);
        }catch (GuzzleException $exception){
            return response()->json(['status' => true, 'value' => $result->usd_conversion_amount, 'currency' => $result->code]);
        }
        $result = json_decode($response->getBody()->getContents());
        $current_value = $result->results->$conversion->val;
        $extra_percentage = $currency == 'BDT' ?
            config('settings.extra_percentage_for_bd_conversion') :
            config('settings.extra_percentage_for_pk_conversion');
        $value = $current_value + $current_value * $extra_percentage; // extra conversion percentage
        $currency_code = $result->results->$conversion->to;
        Currency::updateOrCreate(['code' => $currency_code], [
            'usd_conversion_amount' => $value,
            'expire_at' => Carbon::now()->addDay('1')
        ]);
        return response()->json(['status' => true, 'value' => $value, 'currency' => $currency_code]);
    }

    /**
     * @param bool $review
     * @return array
     * order validation rules
     */
    public function orderValidation($review = false){
        if (!$review){
            return [
                'order.taxAmount' => 'required|numeric|not_in:0',
                'order.grandTotal' => 'required|numeric|not_in:0',
                'order.currency' => 'required',
                'paymentMethod' => 'required',
                'address.address' => 'required|min:4',
                'address.city' => 'required|min:2',
                'address.country_id' => 'required|not_in:0',
                'address.state_id' => 'required|not_in:0',
                'address.phones' => 'required|array'
            ];
        }
        return [
            'address.address' => 'required|min:4',
            'address.city' => 'required|min:2',
            'address.country_id' => 'required|not_in:0',
            'address.state_id' => 'required|not_in:0',
            'address.phones' => 'required|array'
        ];
    }

    /**
     * @param bool $review
     * @return array
     * validation message for order
     */
    public function orderValidationMessage($review = false){
        if (!$review){
            return [
                'order.taxAmount.required' => trans('validation.tax'),
                'order.grandTotal.required' => trans('validation.grandTotal'),
                'order.currency.required' => trans('validation.currency'),
                'paymentMethod.required' => trans('validation.payment-method'),
                'address.address.required' => trans('validation.address'),
                'address.city.required' => trans('validation.city'),
                'address.country_id.required' => trans('validation.country'),
                'address.state_id.required' => trans('validation.street'),
                'address.phones.required' => trans('validation.phone_number')
            ];
        }
        return [
            'address.address.required' => trans('validation.address'),
            'address.city.required' => trans('validation.city'),
            'address.country_id.required' => trans('validation.country'),
            'address.state_id.required' => trans('validation.street'),
            'address.phones.required' => trans('validation.phone_number')
        ];
    }

    /**
     * @param $order
     * @param $method
     * @return mixed
     * @throws \Exception
     */
    public function orderCalculator($order, $method){
        $currency = $order["order"]["currency"];
        $country = $order["address"]["country_id"]; // country id from address
        $state = isset($order["address"]["state_id"]) ? $order["address"]["state_id"] : ''; // state id from address
        $district = isset($order["address"]["district_id"]) ? $order["address"]["district_id"] : ''; // state id from address
        $items = User::with("addToCarts.itemPrice")->where('id', auth()->id())->first(); //selecting item dedpends onn user
        $itemSubTotal = $items->addToCarts->sum("itemPrice.item_subtotal_price"); // item subtotal included all charges
        if (!$items->addToCarts->count())
            throw \Illuminate\Validation\ValidationException::withMessages([
                'no_items' => ['No items found']
            ]);
        $conversion_rate = $this->currencyRate($currency)->getData()->value;  //currency conversion rate
        $priceTotal = $items->addToCarts->sum("itemPrice.price"); // item subtotal excluded other chrges
        $taxUsa = $this->taxUSA($priceTotal); //us tax
        $localTaxes = $this->taxBD($priceTotal); //taxbd
        $royalty_charge = $this->royaltyCharge($priceTotal); //Royalty charge
        $volumetric_weight = 0;
        $items_shipping_cost = 0;
        foreach ($items->addToCarts as $item){
            $items_shipping_cost += optional($item->itemPrice)->item_shipping_cost;
            $volumetric_weight += preg_replace("/[^0-9.]/", '', $item->volumetric_weight) * $item->itemPrice->quantity; //volumetric weight excluded the unit
        }
        $shipping = new ShpingAPIController($this->filter);
        $shipping_cost =
            !is_null($district) ? $shipping
            ->getShippingCost($country,$volumetric_weight, null, $district)
            ->getData(): $shipping
            ->getShippingCost($country,$volumetric_weight, $state, $district)
            ->getData();

        if (!$shipping_cost->status)
            throw \Illuminate\Validation\ValidationException::withMessages([
                'shipping_cost' => ['ShopNShipBD does not allow your shipping address. Please contact our support team.']
            ]);
        $gateWayCharge = 0;
        $grandPrice = $itemSubTotal +
            $taxUsa +
            $localTaxes +
            $royalty_charge +
            $shipping_cost->cost +
            $items_shipping_cost; //grand price expect gatway excluded
        if ($method->is_online){
            try{
                $gateWay = PaymentOnline::findOrFail($order["gateway"]);
                $gateWayCharge = $this->gatewayCharge($gateWay->alias, $grandPrice);
                $grandPrice += $gateWayCharge; // with gateway charge
            }catch (ModelNotFoundException $exception){
                throw \Illuminate\Validation\ValidationException::withMessages([
                    'payment_method' => ['Payment method is not found']
                ]);
            }
        }

        return [
            "tax_usa" => $taxUsa,
            "tax_bd" => $localTaxes,
            'royalty_charge' => $royalty_charge,
            'shipping_cost' => $shipping_cost->cost,
            'gateway_charge' => $gateWayCharge * $conversion_rate,
            'grand_price' => $grandPrice * $conversion_rate,
            'currency_rate' => $conversion_rate,
            'item_sub_total' => $itemSubTotal
        ];

    }

    public function statusChecker($status){
        $not_allowed = ['purchased ', 'dac-received', 'cleared-custom', 'confirmed', 'transit', 'pending-custom-clearance', 'out-for-delivery', 'partial-payment-complete', 'delivered'];
        if (in_array($status, $not_allowed))
            return true;
        return false;
    }

    public function payment($gateway, $calculationResult){

    }

}
