<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class DistrictRequest extends FormRequest
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
            'title' => 'required|min:2',
            'country_id' => 'required',
            'state_id' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'District Name is required!',
            'country_id.required' => 'country_id is required!',
            'state_id.required' => 'State is required!',
        ];
    }
}
