<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderStatusResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $description = json_decode(optional($this->pivot)->description);
        $returnArray = [
            'id' => $this->id,
            'title' => $this->title,
            'alias' => $this->alias
        ];
        if (isset($description->image)){
            $returnArray["delivered_to"] = optional($description)->delivered_to;
            $returnArray["image"] = \Storage::url(optional($description)->image);
        }
        return $returnArray;
    }
}
