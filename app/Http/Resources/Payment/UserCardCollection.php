<?php

namespace App\Http\Resources\Payment;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Models\UserPaymentCart;
class UserCardCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->collection->transform(function (UserPaymentCart $cart){
            return (new UserCardResource($cart));
        });
        return parent::toArray($request);
    }
}
