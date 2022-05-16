<?php

namespace App\Http\Controllers;

use App\Http\Requests\RatingRequest;
use App\Http\Resources\RatingResource;
use App\Models\Rating;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use function GuzzleHttp\Promise\all;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Rating $rating)
    {
       return RatingResource::collection(Rating::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return RatingResource
     */
    public function store(RatingRequest $request, Rating $rating)
{

  $data = Rating::create($request->validated());
  $rating->updateRating($request);
  return new RatingResource($data);
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rating  $rating
     * @return RatingResource
     */
    public function show(Rating $rating)
    {
      return new RatingResource(Rating::with('rating')->findOrFail($rating->id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rating  $rating
     * @return RatingResource
     */

    public function update(Request $request, Rating $rating)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rating $rating)
    {
        //
    }
}
