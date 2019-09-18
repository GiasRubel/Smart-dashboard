<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class PaymentByCardRequest extends FormRequest
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
        return [
            'title' => 'required',
            'payment_method_id' => 'required',
            'alias' => 'required|unique:payment_onlines,alias,'.$this->id,

        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Payment By Card Title required!',
            'payment_method_id.required' => 'Payment Method is required!',

        ];
    }
}
