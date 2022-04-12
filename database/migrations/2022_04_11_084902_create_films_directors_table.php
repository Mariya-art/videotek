<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

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
            $table->foreignId('film_id')->constrained('films')->onDelete('cascade');
            $table->foreignId('director_id')->constrained('directors')->onDelete('cascade');
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
