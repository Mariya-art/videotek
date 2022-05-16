<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        return NewsResource::collection(News::latest()->get());
    }

    public function show(News $news)
    {
        return new NewsResource(News::findOrFail($news->id));
    }
}
