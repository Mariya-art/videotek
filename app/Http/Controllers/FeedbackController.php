<?php

namespace App\Http\Controllers;

use App\Http\Requests\FeedbacksRequest;
use App\Http\Resources\FeedbackResources;
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
        $name = Feedbacks::create($request->validate());
        return new FeedbackResources($name);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return FeedbackResources
     */
    public function show($id)
    {

//      return new FeedbackResources(Feedbacks::with('films')->findOrFail($id));

      return new FeedbackResources(Feedbacks::with('feedbacks')->find($id));


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
