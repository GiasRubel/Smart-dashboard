<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class TaxRulesRequest extends FormRequest
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
            'priority' => 'required|numeric',
            'contain_title' => 'required',
            'tax_price' => 'required|numeric',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tax Rules Title required!',
            'priority.required' => 'Priority is required!',
            'contain_title.required' => 'Contain Title is required!',
            'tax_price.required' => 'Tax Price is required!',
        ];
    }


}
