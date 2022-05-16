<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{
    use HasFactory;

    protected $table = 'actors';

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
