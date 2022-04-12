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

    public function films() {
        return Film::get()->map( function (Film $film) {
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

    public function film($slug) {
        return Film::where('slug', $slug)->first();
    }

    public function show($id) { //Film $film
        return view('films.show'/*, [
            'film' => $film,
        ]*/);
    }
}
