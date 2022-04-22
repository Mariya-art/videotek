<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SeasonResource extends JsonResource
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
            'film_id' => $this->film_id,
            'number' => $this->number,
            'title' => $this->title,
            'description' => $this->description,
            'series' => SeriesResource::collection($this->series),
        ];
    }
}
