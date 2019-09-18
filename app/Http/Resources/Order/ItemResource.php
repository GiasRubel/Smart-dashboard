<?php

namespace App\Http\Resources\Order;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
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
            'weight' => $this->volumetric_weight ?? 0,
            'dimension' => $this->dimension,
            'url' => $this->url,
            'imageUrl' => $this->imageUrl,
            'is_gift' => ($this->is_gift) ? true : false,
            'is_apply_insurance' => ($this->is_apply_insurance) ? true : false,
            'prices' => $this->itemPrice,
            'custom_prices' => $this->itemAdminOperationInfo,
            'instruction' => $this->description,
            'status' => $this->status
        ];
    }
}
