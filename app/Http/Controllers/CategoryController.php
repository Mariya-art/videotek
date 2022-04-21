<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\FilmResource;
use App\Models\Category;
use App\Models\Film;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories() {
        return CategoryResource::collection(Category::get());
    }

    public function getItemCategories($id) {
        $item = new FilmResource(Film::findOrFail($id));
        return CategoryResource::collection($item->categories);
    }
}
