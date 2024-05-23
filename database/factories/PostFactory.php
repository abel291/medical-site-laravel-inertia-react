<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'entry' => fake()->sentence(20, false),
            'description' => fake()->text(2000),
            'slug' => fake()->slug(),
            'image' => '/img/img-1.jpg',
            'thumb' => '/img/img-1.jpg',
        ];
    }
}
