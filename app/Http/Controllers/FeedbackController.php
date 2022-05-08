<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbacksRequest;
use App\Http\Resources\FeedbackResources;
use App\Http\Resources\FilmResource;
use App\Models\Feedbacks;
use App\Models\Film;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {

        return FeedbackResources::collection(Feedbacks::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeedbacksRequest $request)
    {
        $validated = $request->validated();
        $name = Feedbacks::create($validated);

        return new FeedbackResources($name);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return FeedbackResources
     */
    public function show(Film $film, Feedbacks $feedbacks)
    {

//      return new FeedbackResources(Feedbacks::with('films')->findOrFail($id));

      return new FeedbackResources(Feedbacks::with('films')->find($film));


//      SELECT AVG(rating) FROM feedbacks WHERE film_id = 1;

//      $price = DB::table('orders')
//        ->where('finalized', 1)
//        ->avg('price')
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
