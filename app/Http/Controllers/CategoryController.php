<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\FilmResource;
use App\Models\Category;
use App\Models\Film;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getFilmsCategories() {
        return CategoryResource::collection(Category::whereHas('films', function($films){
            $films->where('type_id', 1);
        })->get());
    }
    
    public function getSerialsCategories() {
        return CategoryResource::collection(Category::whereHas('films', function($films){
            $films->where('type_id', 2);
        })->get());
    }

    public function getItemCategories($id) {
        $item = new FilmResource(Film::findOrFail($id));
        return CategoryResource::collection($item->categories);
    }
}
