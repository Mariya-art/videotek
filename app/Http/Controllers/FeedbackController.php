<?php declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\FeedbackStoreRequest;
use App\Http\Requests\FeedbackUpdateRequest;
use App\Http\Resources\FeedbackResource;
use App\Http\Resources\FilmResource;
use App\Models\Feedback;
use App\Models\Film;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /*return response()->json([
            'feedbacks' => FeedbackResource::collection(Feedback::latest()->get()),
        ], 200);*/
        return FeedbackResource::collection(Feedback::latest()->get());
    }

    public function getFilmFeedbacks($film_id)
    {
        return FeedbackResource::collection(Film::findOrFail($film_id)->feedbacks()->orderBy('created_at', 'desc')
        ->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeedbackStoreRequest $request)
    {
        $feedback = Feedback::create($request->validated());
        return new FeedbackResource($feedback);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Feedback $feedback)
    {
        return new FeedbackResource(Feedback::with('film')->findOrFail($feedback->id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FeedbackUpdateRequest $request, Feedback $feedback)
    {
        $feedback->update($request->validated());
        return new FeedbackResource($feedback);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();
        return response(null, Response::HTTP_NO_CONTENT);
    }
}
