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
            'entry' => fake()->words(15, true),
            'image' => '/img/specialties/specialty-1.jpg',
            'thumb' => '/img/specialties/specialty-1.jpg',
            'description' => fake()->text(800),
        ];
    }
}
