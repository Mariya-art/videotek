<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Film;
use App\Models\Type;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    public function index() {
        /*
        $types = Type::query()->get();

        $films = Film::query()->select(Film::$availableFields)
                            ->latest()
                            ->paginate(6);
        */
        
        return view('index'/*, [
            'types' => $types,
            'films' => $films,
        ]*/);
    }

    public function getNewItems() {
        return Film::orderBy('year', 'desc')->get()->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
                'trailer' => $film->trailer,
                'link' => $film->link,
            ];
        });
    }

    public function getRatingItems() {
        return Film::orderBy('rating', 'desc')->get()->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
            ];
        });
    }

    public function getNewFilms() {
        return Film::where('type_id', 1)->orderBy('year', 'desc')->get()->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
            ];
        });
    }
    
    public function getNewSerials() {
        return Film::where('type_id', 2)->orderBy('year', 'desc')->get()->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
            ];
        });
    }

    public function getNewVideos() {
        return Film::where('type_id', 3)->orderBy('year', 'desc')->get()->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
            ];
        });
    }

    public function getCategoryFilms($slug) {
        return Film::join('films_categories', 'films_categories.film_id', '=', 'films.id')
        ->join('categories', 'categories.id', '=', 'films_categories.category_id')
        ->where('categories.slug', '=', $slug)
        ->select('films.*')
        ->get()
        ->map( function (Film $film) {
            return [
                'id' => $film->id,
                'img' => $film->image,
                'title' => $film->title,
                'route' => $film->slug,
                'score' => $film->rating,
                'age' => $film->age_limit,
                'year' => $film->year,
                'country' => $film->country,
                'description' => $film->description,
            ];
        });
    }

    public function getFilm($slug) {
        return Film::where('slug', $slug)->first();
    }

    public function show($id) { //Film $film
        return view('films.show'/*, [
            'film' => $film,
        ]*/);
    }
}
