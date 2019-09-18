<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class AddressRequest extends FormRequest
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
            'full_name' => 'required',
            'address' => 'required',
            'district_id' => 'required_if:country_id,1',
            'state_id' => 'required_unless:country_id,1',
            'phones' => 'required|array',
            'country_id' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'district_id.required_if' => 'The district field is required.',
            'state_id.required_if'  => 'The state field is required.',
        ];
    }
}
