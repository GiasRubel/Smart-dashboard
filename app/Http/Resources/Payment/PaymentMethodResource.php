<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\JsonResource;

class PaymentMethodResource extends JsonResource
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
            'title' => $this->title,
            'is_online' => $this->is_online,
            'is_card_applicable' => $this->is_card_applicable,
            'gateway' => (new PaymentOnlineCollection($this->online)),
            'gateway_link' => url("payment/method/$this->id"),
        ];
    }
}
