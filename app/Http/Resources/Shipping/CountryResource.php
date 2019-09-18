<?php

namespace App\Http\Resources\Shipping;

use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
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
            'name' => $this->title,
            'is_shippable' => $this->is_shippable,
            'states' => url("/api/shipping/countries/$this->id")
        ];
    }
}
