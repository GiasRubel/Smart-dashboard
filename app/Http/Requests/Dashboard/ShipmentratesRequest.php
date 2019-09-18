<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class ShipmentratesRequest extends FormRequest
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
            'title'       => 'required',
            'country_id'  => 'required',
            'weight_range'=> 'required',
            'price'       => 'required',

        ];
    }

    public function messages()
    {
        return [
            'title.required'        => 'Shipping Title required!',
            'country_id.required'   => 'Country is required!',
            'weight_range.required' => 'Weight Range is required!',
            'price.required'        => 'Price Range is required!',
        ];
    }
}
