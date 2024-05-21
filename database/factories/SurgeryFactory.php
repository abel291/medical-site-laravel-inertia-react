<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Surgery>
 */
class SurgeryFactory extends Factory
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
            'entry' => fake()->sentence(50, false),
            'image' => "/img/surgeries/surgery-1.jpg",
            'thumb' => "/img/surgeries/surgery-1.jpg",
            'description' => fake()->text(1800),
        ];
    }
}
