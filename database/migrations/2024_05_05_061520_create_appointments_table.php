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
		Schema::create('appointments', function (Blueprint $table) {
			$table->id();
			$table->string('name')->nullable();
			$table->string('phone')->nullable();
			$table->string('email')->nullable();
			$table->integer('age')->nullable();
			$table->string('sex')->nullable();
			$table->string('country')->nullable();
			$table->string('state')->nullable();
			$table->json('extra_field')->nullable();
			$table->text('consultation');
			$table->json('data')->nullable();
			$table->string('type'); //modal - form
			$table->string('path_origin'); //modal - form
			$table->boolean('subscribed')->default(false);
			$table->nullableMorphs('model');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('appointments');
	}
};
