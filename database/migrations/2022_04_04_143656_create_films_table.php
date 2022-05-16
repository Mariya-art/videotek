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
        Schema::create('films', function (Blueprint $table) {
            $table->id();
            $table->foreignId('type_id')->constrained('types')->onDelete('cascade');
            $table->string('title', 255)->unique();
            $table->string('slug', 255)->unique();
            $table->text('description')->nullable();
            $table->year('year')->nullable();
            $table->string('country', 255)->nullable();
            $table->unsignedTinyInteger('age_limit')->nullable();
            $table->enum('status', ['new', 'active', 'blocked'])->default('new');
            $table->string('image', 100)->nullable();
            $table->decimal('price', $precision = 9, $scale = 2)->nullable();
            $table->decimal('rating', $precision = 3, $scale = 1)->nullable();
            $table->string('filename', 100)->nullable();
            $table->string('link', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('films');
    }
};
