<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\PaymentOnline;

class PaymentOnlineCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function(PaymentOnline $online) {
            return (new PaymentOnlineResource($online));
        });
        return parent::toArray($request);
    }
}
