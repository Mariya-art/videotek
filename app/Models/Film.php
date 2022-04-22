<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Film extends Model
{
    use HasFactory;

    protected $table = 'films';

    protected $guarded = [ // зеркальный вариант $fillable (все, кроме id)
        'id'
    ];

    public function type()
    {
        return $this->belongsTo(Type::class);
    }

    /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

            /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function actors()
    {
        return $this->belongsToMany(Actor::class);
    }

            /**
    * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
    */
    public function directors()
    {
        return $this->belongsToMany(Director::class);
    }

    public function seasons()
    {
        return $this->hasMany(Season::class);
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
