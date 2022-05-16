<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FeedbackResource extends JsonResource
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
            'username' => $this->username,
            'film_id' => $this->film_id,
//            'rating' => $this->rating,
            'text' => $this->text,
            // 'status' => $this->status,
            // 'created_at' => $this->created_at,
        ];
    }
}
