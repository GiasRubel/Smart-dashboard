<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class CurrencyRequest extends FormRequest
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
            'usd_conversion_amount' => 'required',
        ];
    }


    public function messages()
    {
        return [
            'title.required' => 'Currency is required!',
            'usd_conversion_amount.required' => 'Convertion Ammount is required!',
        ];
    }
}
