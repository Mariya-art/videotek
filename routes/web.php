<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\FilmController;
use App\Http\Controllers\SpaController;
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

//Route::get('/', [FilmController::class, 'index'])->name('index');

Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');
//Route::get('/{feedbacks}',[ \App\Http\Controllers\FeedbackController::class, 'store']);

//Route::get('/apiweb', function (){
//    $response = Http::get('https://imdb-api.com/en/API/Title/k_y40dpk46/tt12412888/Ratings')->json();
//    dd($response);
//});
