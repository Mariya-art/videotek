<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $table = 'feedbacks';

    protected $guarded = [ // зеркальный вариант $fillable (все, кроме id)
        'id'
    ];

    public function film()
    {
        return $this->belongsTo(Film::class);
    }
}
