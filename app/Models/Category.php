<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

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

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
