<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StripePaymentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if($this->is("api/payment/stripe/release")){
            return [

            ];
        }else if($this->is("api/payment/stripe/charge")){
            return [
                'card_number' => 'required|min:12',
                'cvc' => 'required|min:3',
                'expire_month' => 'required',
                'expire_year' => 'required',
                'gateway_id' => 'required',
                'order_id' => 'required',
                'amount' => 'required'
            ];
        }else if($this->is("api/payment/stripe/capture")){
            return [

            ];
        }
        return [

        ];
    }

    public function messages()
    {
        if ($this->is("api/payment/stripe/release")){
            return [

            ];
        }else if($this->is("api/payment/stripe/charge")){
            return [
                'gateway_id.required' => "You must select an payment method"
            ];
        }else if($this->is("api/payment/stripe/capture")){
            return [

            ];
        }
        return [

        ];
    }
}
