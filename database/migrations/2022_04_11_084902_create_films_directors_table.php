<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Film;
use App\Models\Director;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films_directors', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Film::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Director::class)->constrained()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films_directors');
    }
};
