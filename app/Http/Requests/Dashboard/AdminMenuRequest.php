<?php

namespace App\Http\Requests\Dashboard;

use Illuminate\Foundation\Http\FormRequest;

class AdminMenuRequest extends FormRequest
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
            'menu_types' => 'required',
            'menu_action' => 'required',
            'route' => 'required',

        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Admin Menu Title required!',
            'menu_types.required' => 'Menu Types is required!',
            'menu_action.required' => 'Menu Action is required!',
            'route.required' => 'Route is required!',
        ];
    }
}
