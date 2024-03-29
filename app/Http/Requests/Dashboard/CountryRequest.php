<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class CountryRequest extends FormRequest
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
            'title'         => 'required',
            'country_code'  => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required'        => 'Country Name is required!',
            'country_code.required' => 'Country Code is required!',
        ];
    }
}
