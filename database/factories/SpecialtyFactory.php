<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Specialty>
 */
class SpecialtyFactory extends Factory
{
	/**
	 * Define the model's default state.
	 *
	 * @return array<string, mixed>
	 */
	public function definition(): array
	{
		$title = fake()->sentence();

		return [
			'name' => $title,
			'slug' => Str::slug($title),
			'entry' => fake()->sentence(),
			'image' => fake()->image(),
			'thumb' => fake()->image(),
			'description' => fake()->text(800),
		];
	}
}
