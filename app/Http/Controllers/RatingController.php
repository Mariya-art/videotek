<?php

namespace App\Http\Controllers;

use App\Http\Requests\RatingStoreRequest;
use App\Http\Resources\FilmResource;
use App\Http\Resources\RatingResource;
use App\Models\Film;
use App\Models\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return RatingResource::collection(Rating::latest()->get());
    }

    public function getFilmRating($film_id)
    {
        $film = Film::findOrFail($film_id)->loadAvg('ratings as avg_rating', 'rating');
        $avg_rating = $film->avg_rating;
        $film = Film::with([
            'categories', 'actors', 'directors', 'seasons', 'seasons.series'
        ])->findOrFail($film_id);
        $film->rating = $avg_rating;
        $film->save();
        return new FilmResource($film);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RatingStoreRequest $request)
    {
        $rating = Rating::create($request->validated());
        return new RatingResource($rating);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
