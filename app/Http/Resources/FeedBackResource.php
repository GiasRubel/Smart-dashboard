<?php

namespace App\Http\Resources;

use App\Http\Resources\User\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class FeedBackResource extends JsonResource
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
            'message' => $this->message,
            'user' => [
                'name' => optional($this->user)->name,
                'image' => \Storage::url('avatars/'.optional($this->user)->id.".".optional($this->user)->image)
            ]
        ];
    }
}
