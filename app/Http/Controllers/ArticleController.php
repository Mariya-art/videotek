<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return ArticleResource::collection(Article::latest()->get());
    }

    public function show(Article $article)
    {
        return new ArticleResource(Article::findOrFail($article->id));
    }
}
