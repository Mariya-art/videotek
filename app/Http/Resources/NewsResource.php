<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'img' => $this->image,
            'title' => $this->title,
            'route' => $this->slug,
            'text' => $this->text,
            'status' => $this->status,
            'created_at' => $this->created_at,
        ];
    }
}
