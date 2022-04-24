<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\TypeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/types', [TypeController::class, 'index']);
Route::get('/types/{id}', [TypeController::class, 'show']);

Route::get('/main/rating', [FilmController::class, 'getRatingItems']);
Route::get('/main/new', [FilmController::class, 'getNewItems']);

Route::get('/films', [FilmController::class, 'getNewFilms']);
Route::get('/serials', [FilmController::class, 'getNewSerials']);
Route::get('/videos', [FilmController::class, 'getNewVideos']);

Route::get('/genres', [CategoryController::class, 'getCategories']);
Route::get('/films/{categoryId}', [FilmController::class, 'getCategoryFilms']);
Route::get('/serials/{categoryId}', [FilmController::class, 'getCategorySerials']);
Route::get('/videos/{categoryId}', [FilmController::class, 'getCategoryVideos']);

Route::get('/films/{filmId}/actors', [ActorController::class, 'getItemActors']);
Route::get('/films/{filmId}/directors', [DirectorController::class, 'getItemDirectors']);
Route::get('/films/{filmId}/categories', [CategoryController::class, 'getItemCategories']);
//Route::get('/films/{slug}', [FilmController::class, 'getFilm']);
//Route::get('/types/{slug}', [TypeController::class, 'show'])->name('types.show');
