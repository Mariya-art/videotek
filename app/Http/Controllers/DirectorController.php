<?php

namespace App\Http\Controllers;

use App\Models\Director;
use Illuminate\Http\Request;

class DirectorController extends Controller
{
    public function getItemDirectors($slug) {
        return Director::join('films_directors', 'films_directors.director_id', '=', 'directors.id')
        ->join('films', 'films.id', '=', 'films_directors.film_id')
        ->where('films.slug', '=', $slug)
        ->select('directors.*')
        ->get()
        ->map( function (Director $director) {
            return [
                'id' => $director->id,
                'img' => $director->image,
                'name' => $director->name,
                'route' => $director->slug,
                'birthday' => $director->birthday,
                'birthplace' => $director->birthplace,
                'height' => $director->height,
                'status' => $director->status,
                'description' => $director->description,
            ];
        });
    }
}
