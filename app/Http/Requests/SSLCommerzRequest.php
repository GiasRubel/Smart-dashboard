<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SSLCommerzRequest extends FormRequest
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
        if($this->is("sslcommerz/payment")) {
            return [
                'gateway_id' => 'required'
            ];
        }else{
            return [

            ];
        }
    }

    public function messages()
    {
        if($this->is("sslcommerz/payment")) {
            return [
                'payment_method_id.required' => 'You must select a payment method to pay'
            ];
        }else{
            return [

            ];
        }
    }
}
