<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeriesResource extends JsonResource
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
            'season_id' => $this->season_id,
            'number' => $this->number,
            'title' => $this->title,
            'description' => $this->description,
            'trailer' => $this->trailer,
            'link' => $this->link,
        ];
    }
}
