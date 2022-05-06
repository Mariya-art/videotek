<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedbacks extends Model
{
    use HasFactory;

    protected $fillable =[
      'rating',
      'film_id'
    ];

    public function feedbacks(){
      return $this->belongsTo(Film::class);
    }


}
