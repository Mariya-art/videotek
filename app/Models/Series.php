<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Series extends Model
{
    use HasFactory;

    protected $table = 'series';

    protected $guarded = [ // зеркальный вариант $fillable (все, кроме id)
        'id'
    ];

    public function season()
    {
        return $this->belongsTo(Season::class);
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
