<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "img" => "/img/image-" . rand(1, 3) . ".jpg",
            "thumb" => "/img/image-" . rand(1, 3) . ".jpg",
            "alt" => fake()->sentence(),
            "title" => fake()->sentence(),

        ];
    }
}
