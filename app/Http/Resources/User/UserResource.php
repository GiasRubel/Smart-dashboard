<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'name' => $this->name,
            'email' => $this->email,
            'mobile' => $this->mobile,
            'is_active' => $this->is_active,
            'image' => \Storage::url('avatars/'.auth()->id().".".$this->image),
            'is_email_verify' => $this->is_email_verify,
            'is_mobile_verify' => $this->is_mobile_verify,
            'defaultAddress' => (isset($this->defaultAddress)) ? $this->defaultAddress : '',
            'addresses' => (isset($this->addresses)) ? $this->addresses : ''
        ];
    }
}
