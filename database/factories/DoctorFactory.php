<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Doctor>
 */
class DoctorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->email(),
            'email2' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'phone2' => fake()->phoneNumber(),
            'entry' => fake()->sentence(),
            'description' => fake()->text(800),
            'image' => fake()->image(),
            'thumb' => fake()->image(),
        ];
    }
}
