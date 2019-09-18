<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;

class OrderPlaceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'order.taxAmount' => 'required|numeric|min:1',
            'order.grandTotal' => 'required|numeric|min:1',
            'order.currency' => 'required',
            'paymentMethod' => 'required',
            'address.address' => 'required|min:4',
            'address.city' => 'required|min:2',
            'address.country_id' => 'required|not_in:0',
            'address.state_id' => 'required|not_in:0',
            'address.phones' => 'required|array'
        ];
    }
    public function messages()
    {
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
}
