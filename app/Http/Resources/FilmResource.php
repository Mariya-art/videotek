<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FilmResource extends JsonResource
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
            'type_id' => $this->type_id,
            'img' => $this->image,
            'title' => $this->title,
            'route' => $this->slug,
            'score' => $this->rating,
            'age' => $this->age_limit,
            'year' => $this->year,
            'country' => $this->country,
            'description' => $this->description,
            'trailer' => $this->trailer,
            'link' => $this->link,
            'genres' => CategoryResource::collection($this->categories),
            'actors' => ActorResource::collection($this->actors),
            'directors' => DirectorResource::collection($this->directors),
            'seasons' => SeasonResource::collection($this->seasons),
        ];
    }
}
