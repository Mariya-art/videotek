<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\FilmResource;
use App\Models\Category;
use App\Models\Film;
use Illuminate\Http\Request;

class FilmController extends Controller
{
    /*
    public function index() {
        $types = Type::query()->get();

        $films = Film::query()->select(Film::$availableFields)
                            ->latest()
                            ->paginate(6);
        
        return view('index', [
            'types' => $types,
            'films' => $films,
        ]);
    }*/

    public function getItems() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->orderBy('year', 'desc')->get());
    }

    public function getRatingItems() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->orderBy('rating', 'desc')->limit(8)->get());
    }

    public function getNewItems() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->orderBy('year', 'desc')->limit(8)->get());
    }

    public function getNewFilms() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 1)->orderBy('year', 'desc')->get());
    }
    /*
    public function getFilmsPageCount() {
        $films = FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 1)->orderBy('year', 'desc')->paginate(3));
        return $films->lastPage();
    }
    */
    public function getNewSerials() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 2)->orderBy('year', 'desc')->get());
    }

    public function getNewVideos() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 3)->orderBy('year', 'desc')->get());
    }

    public function getCategoryFilms($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films->where('type_id', 1));
    }

    public function getCategorySerials($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films->where('type_id', 2));
    }

    public function getCategoryVideos($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films->where('type_id', 3));
    }

    public function getItem(Film $film)
    {
        return new FilmResource(Film::findOrFail($film->id));
    }
    /*
    public function getFilm($slug) {
        return Film::where('slug', $slug)->first();
    }*/
}
