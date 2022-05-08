<?php

namespace Database\Seeders;

use App\Http\Resources\FilmResource;
use Faker\Factory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class FeedbacksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return array
     */
    public function run()
    {
      DB::table('feedbacks')->insert($this->getData());

    }

    private function getData(){
//$film_id = FilmResource::collection([4]);
      $faker = Factory::create('ru_RU');
      $arr = [];
      for ($i=0; $i<50; $i++) {
        $arr[] = [
          'film_id' => $faker->numberBetween(1, 9),
          'rating' => $faker->numberBetween(1, 10),
        ];
      }
      return $arr;
    }

}
