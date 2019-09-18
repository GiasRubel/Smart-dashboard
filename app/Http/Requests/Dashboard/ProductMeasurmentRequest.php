<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class ProductMeasurmentRequest extends FormRequest
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
            'title'            => 'required',
            'sku'              => 'required',
            'volumetric_weight'=> 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required'              => 'Title is required!',
            'sku.required'                => 'Sku is required!',
            'volumetric_weight.required'  => 'Volumetric Weight is required!',
        ];
    }
}
