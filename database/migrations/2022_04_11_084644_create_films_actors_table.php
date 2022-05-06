<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Film;
use App\Models\Actor;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('films_actors', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Film::class)->constrained()->onDelete('cascade');
            $table->foreignIdFor(Actor::class)->constrained()->onDelete('cascade');
            $table->string('role', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films_actors');
    }
};
