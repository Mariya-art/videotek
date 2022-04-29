<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Director extends Model
{
    use HasFactory;

    protected $table = 'directors';

    protected $guarded = [ // зеркальный вариант $fillable (все, кроме id)
        'id'
    ];

            /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function films()
    {
        return $this->belongsToMany(Film::class);
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
