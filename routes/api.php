<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\RatingController;
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

Route::get('/types', [TypeController::class, 'index']); // типы items (фильмы, сериалы, видео)
Route::get('/types/{id}', [TypeController::class, 'show']); // items конкретного типа

Route::get('/main', [FilmController::class, 'getItems']); // все items (фильмы, сериалы, видео)
Route::get('/main/rating', [FilmController::class, 'getRatingItems']); // items по рейтингу, лимит 8
Route::get('/main/new', [FilmController::class, 'getNewItems']); // items по году выпуска, лимит 8

Route::get('/filmsPageCount', [FilmController::class, 'getFilmsPageCount']); // кол-во страниц пагинации фильмов
Route::get('/films', [FilmController::class, 'getNewFilms']); // все фильмы
Route::get('/serials', [FilmController::class, 'getNewSerials']); // все сериалы
Route::get('/videos', [FilmController::class, 'getNewVideos']); // все видео
Route::get('/news', [NewsController::class, 'index']); // все новости
Route::get('/articles', [ArticleController::class, 'index']); // все статьи

Route::get('/films/{film}', [FilmController::class, 'getItem']); // конкретный фильм по slug
Route::get('/actors/{actor}', [ActorController::class, 'show']); // конкретный актер по slug
Route::get('/directors/{director}', [DirectorController::class, 'show']); // конкретный режиссер по slug
Route::get('/news/{news}', [NewsController::class, 'show']); // конкретная новость по slug
Route::get('/articles/{article}', [ArticleController::class, 'show']); // конкретная статья по slug

Route::get('/filmsGenres', [CategoryController::class, 'getFilmsCategories']); // жанры фильмов (в которых есть хотя бы 1 фильм)
Route::get('/serialsGenres', [CategoryController::class, 'getSerialsCategories']); // жанры сериалов (в которых есть хотя бы 1 сериал)
Route::get('/films/{categoryId}', [FilmController::class, 'getCategoryFilms']); // фильмы определенного жанра
Route::get('/serials/{categoryId}', [FilmController::class, 'getCategorySerials']); // сериалы определенного жанра
Route::get('/videos/{categoryId}', [FilmController::class, 'getCategoryVideos']); // видео определенного жанра

Route::get('/filmFeedbacks/{film_id}', [FeedbackController::class, 'getFilmFeedbacks']); // отзывы на фильм

Route::apiResources([
    'feedbacks' => FeedbackController::class, // отзывы на все фильмы
    'rating' => RatingController::class,
]);

//Route::get('/films/{filmId}/actors', [ActorController::class, 'getItemActors']);
//Route::get('/films/{filmId}/directors', [DirectorController::class, 'getItemDirectors']);
//Route::get('/films/{filmId}/categories', [CategoryController::class, 'getItemCategories']);
//Route::get('/films/{slug}', [FilmController::class, 'getFilm']);
//Route::get('/types/{slug}', [TypeController::class, 'show'])->name('types.show');
