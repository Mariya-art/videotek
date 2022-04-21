<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DirectorResource extends JsonResource
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
            'name' => $this->name,
            'route' => $this->slug,
            'birthday' => $this->birthday,
            'birthplace' => $this->birthplace,
            'height' => $this->height,
            'status' => $this->status,
            'description' => $this->description,
        ];
    }
}
