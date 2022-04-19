<?php

namespace App\Http\Controllers;

use App\Models\Actor;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function getItemActors($slug) {
        return Actor::join('films_actors', 'films_actors.actor_id', '=', 'actors.id')
        ->join('films', 'films.id', '=', 'films_actors.film_id')
        ->where('films.slug', '=', $slug)
        ->select('actors.*')
        ->get()
        ->map( function (Actor $actor) {
            return [
                'id' => $actor->id,
                'img' => $actor->image,
                'name' => $actor->name,
                'route' => $actor->slug,
                'birthday' => $actor->birthday,
                'birthplace' => $actor->birthplace,
                'height' => $actor->height,
                'status' => $actor->status,
                'description' => $actor->description,
            ];
        });
    }
}
