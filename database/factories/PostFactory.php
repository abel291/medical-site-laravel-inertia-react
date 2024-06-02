<?php

namespace Database\Factories;

use App\Helpers\Helpers;
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
            'description' => Helpers::htmlFake(18),
            'slug' => fake()->slug(),
            'published_at' => $this->faker->dateTimeBetween('-6 month', '+1 month'),
            'image' => "/img/posts/post-" . rand(1, 7) . ".jpg",
            'thumb' => "/img/posts/post-" . rand(1, 7) . ".jpg",
        ];
    }
}
