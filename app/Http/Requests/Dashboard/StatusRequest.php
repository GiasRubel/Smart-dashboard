<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class StatusRequest extends FormRequest
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
            'alias' => 'required',
            'notify_by' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tax Zone Title required!',
            'country_id.required' => 'Country is required!',
            'state_id.required' => 'State is required!',
        ];
    }
}
