<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
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
        $rules=[];
        foreach ($this->request->all() as $k=>$v){
               $rules[$k]['title'] ='required';
               $rules[$k]['item_from'] ='required';
               $rules[$k]['url'] ='required';
               $rules[$k]['current_price'] ='required';
               $rules[$k]['sku'] ='required';
               $rules[$k]['item_price'] ='required';

        }
        return $rules;
//        return [
//            'title'=>'required',
//            'item_from'=>'required',
//            'url'=>'required',
//            'current_price'=>'required',
//            'sku'=>'required',
//            'item_price'=>'required',
//        ];
    }
}
