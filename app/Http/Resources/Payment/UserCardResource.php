<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\JsonResource;

class UserCardResource extends JsonResource
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
            'id' => $this->id,
            'card_4_digit' => substr(str_replace(' ', '', $this->card_number), -4),
            'card_number' => $this->card_number,
            'expire_date' => $this->expire_at,
            'card_bank' => $this->card_bank,
            'is_active' => $this->is_active,
            'details_link' => url("payment/user/card/$this->id"),
            'billingAddress' => $this->billingAddress
        ];
    }
}
