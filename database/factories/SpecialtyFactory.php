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
        $title = fake()->sentence(rand(2, 3), true);

        return [
            'name' => $title,
            'slug' => Str::slug($title),
            'entry' => fake()->sentence(15, false),
            'image' => "/img/specialties/specialty-" . rand(1, 4) . ".jpg",
            'thumb' => "/img/specialties/specialty-" . rand(1, 4) . ".jpg",
            'description' => fake()->text(800),
        ];
    }
}
