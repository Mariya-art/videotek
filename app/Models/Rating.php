<?php

namespace App\Models;

use App\Http\Resources\RatingResource;
use http\Env\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Rating extends Model
{
    use HasFactory;


  protected $fillable =[
    'rating',
    'film_id'
  ];

  public function rating()
    {
      return $this->belongsTo(Film::class);
    }

  public function updateRating($id)
  {
    $avgRating = DB::table('ratings')
      ->select('rating')
      ->where('film_id', $id->film_id)
      ->avg('rating');

    DB::table('films', 'rating')
      ->where('id', $id->film_id)
      ->update([
        'rating' => $avgRating
      ]);

  }
}
