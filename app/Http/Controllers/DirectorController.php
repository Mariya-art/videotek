<?php

namespace App\Http\Controllers;

use App\Http\Resources\DirectorResource;
use App\Http\Resources\FilmResource;
use App\Models\Director;
use App\Models\Film;
use Illuminate\Http\Request;

class DirectorController extends Controller
{
    public function getItemDirectors($id) {
        $item = new FilmResource(Film::findOrFail($id));
        return DirectorResource::collection($item->directors);
    }

    public function show(Director $director)
    {
        return new DirectorResource(Director::findOrFail($director->id));
    }
}
