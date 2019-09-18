<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\PaymentMethod;

class PaymenMethodCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function(PaymentMethod $method) {
            return (new PaymentMethodResource($method));
        });
        return parent::toArray($request);
    }
}
