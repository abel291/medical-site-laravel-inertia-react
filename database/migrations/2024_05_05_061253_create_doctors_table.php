<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
            $table->string('email');
            $table->string('email2');
            $table->string('phone');
            $table->string('phone2');
            $table->text('entry');
            $table->text('description')->nullable();;
            $table->string('address')->nullable();
            $table->string('image');
            $table->string('thumb');
            $table->boolean('active')->default(1);
            $table->dateTime('start_date');
            $table->foreignId('specialty_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
        //Sede: Cooper City
        // Especialidad: General and Cosmetic Dentistry
        // Educación: Nova Southeastern
        // Certifications: Asociación Americana Dental

        Schema::create('doctor_surgery', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->foreignId('surgery_id')->constrained()->cascadeOnDelete();
        });

        Schema::create('doctor_specialty', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->foreignId('specialty_id')->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doctors');
        Schema::dropIfExists('doctor_surgery');
        Schema::dropIfExists('doctor_specialty');
    }
};
