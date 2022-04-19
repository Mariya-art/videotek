<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\FilmController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Config;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [FilmController::class, 'index'])->name('index');
Route::get('/main/new', [FilmController::class, 'getNewItems']);
Route::get('/main/rating', [FilmController::class, 'getRatingItems']);

Route::get('/films', [FilmController::class, 'getNewFilms']);
Route::get('/serials', [FilmController::class, 'getNewSerials']);
Route::get('/videos', [FilmController::class, 'getNewVideos']);

Route::get('/genres', [CategoryController::class, 'getCategories']);
Route::get('/films/{slug}', [FilmController::class, 'getCategoryFilms']);

Route::get('/films/{slug}/actors', [ActorController::class, 'getItemActors']);
Route::get('/films/{slug}/directors', [DirectorController::class, 'getItemDirectors']);
Route::get('/films/{slug}/categories', [CategoryController::class, 'getItemCategories']);
//Route::get('/films/{slug}', [FilmController::class, 'getFilm']);
//Route::get('/types/{slug}', [TypeController::class, 'show'])->name('types.show');

/*
Route::get('/apiweb', function (){
    $response = Http::get('https://imdb-api.com/en/API/Title/k_y40dpk46/tt12412888/Ratings')->json();
    dd($response);
});*/