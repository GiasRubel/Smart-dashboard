<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class TaxZoneRatesRequest extends FormRequest
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
            'country_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tax Zone Title required!',
            'country_id.required' => 'Country is required!',
        ];
    }
}
