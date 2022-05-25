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
        ])->where('type_id', 1)->orderBy('year', 'desc')->paginate(12));
    }

    public function getFilmsPageCount() {
        $films = FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 1)->orderBy('year', 'desc')->paginate(12));
        return $films->lastPage();
    }

    public function getNewSerials() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 2)->orderBy('year', 'desc')->get());
    }

    public function getSerialsPageCount() {
        $serials = FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 2)->orderBy('year', 'desc')->paginate(2));
        return $serials->lastPage();
    }

    public function getNewVideos() {
        return FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 3)->orderBy('year', 'desc')->get());
    }

    public function getVideosPageCount() {
        $videos = FilmResource::collection(Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->where('type_id', 3)->orderBy('year', 'desc')->paginate(2));
        return $videos->lastPage();
    }

    public function getCategoryFilms($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films()->where('type_id', 1)->paginate(2));
    }

    public function getGenreFilmsPageCount($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        $films = FilmResource::collection($category->films()->where('type_id', 1)->paginate(2));
        return $films->lastPage();
    }

    public function getCategorySerials($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films()->where('type_id', 2)->get());
    }

    public function getGenreSerialsPageCount($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        $serials = FilmResource::collection($category->films()->where('type_id', 2)->paginate(1));
        return $serials->lastPage();
    }

    public function getCategoryVideos($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        return FilmResource::collection($category->films()->where('type_id', 3)->get());
    }

    public function getGenreVideosPageCount($id) {
        $category = new CategoryResource(Category::with([
            'films.categories', 'films.actors', 'films.directors', 'films.seasons', 'films.seasons.series'
        ])->findOrFail($id));
        $videos = FilmResource::collection($category->films()->where('type_id', 3)->paginate(1));
        return $videos->lastPage();
    }

    public function getItem(Film $film)
    {
        return new FilmResource($film);
    }
    /*
    public function getFilm($slug) {
        return Film::where('slug', $slug)->first();
    }*/
}
