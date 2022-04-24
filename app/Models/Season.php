<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Season extends Model
{
    use HasFactory;

    protected $table = 'seasons';

    protected $guarded = [ // зеркальный вариант $fillable (все, кроме id)
        'id'
    ];

    public function film()
    {
        return $this->belongsTo(Film::class);
    }

    public function series()
    {
        return $this->hasMany(Series::class);
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
