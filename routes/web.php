<?php

use App\Http\Controllers\FilmController;
use Illuminate\Support\Facades\Route;

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
Route::get('/films', [FilmController::class, 'films']);

Route::get('/films/{slug}', [FilmController::class, 'film']);

//Route::get('/types/{slug}', [TypeController::class, 'show'])->name('types.show');