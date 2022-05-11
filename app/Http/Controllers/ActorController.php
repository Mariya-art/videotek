<?php

namespace App\Http\Controllers;

use App\Http\Resources\ActorResource;
use App\Http\Resources\FilmResource;
use App\Models\Actor;
use App\Models\Film;
use Illuminate\Http\Request;

class ActorController extends Controller
{
    public function getItemActors($id) {
        $item = new FilmResource(Film::findOrFail($id));
        return ActorResource::collection($item->actors);
    }

    public function show(Actor $actor)
    {
        return new ActorResource(Actor::findOrFail($actor->id));
    }
}
