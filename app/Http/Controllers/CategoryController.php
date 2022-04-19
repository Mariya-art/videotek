<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories() {
        return Category::get()->map( function (Category $category) {
            return [
                'id' => $category->id,
                'title' => $category->title,
                'route' => $category->slug,
            ];
        });
    }

    public function getItemCategories($slug) {
        return Category::join('films_categories', 'films_categories.category_id', '=', 'categories.id')
        ->join('films', 'films.id', '=', 'films_categories.film_id')
        ->where('films.slug', '=', $slug)
        ->select('categories.*')
        ->get()
        ->map( function (Category $category) {
            return [
                'id' => $category->id,
                'title' => $category->title,
                'route' => $category->slug,
            ];
        });
    }
}
