<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Appointment>
 */
class AppointmentFactory extends Factory
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
            'phone' => fake()->phoneNumber,
            'email' => fake()->email,
            'message' => fake()->sentence(20),
            'type' => fake()->randomElement(['form', 'modal']),
            'subscribed' => rand(1, 0),
            'page' => 'home',
            'created_at' => $this->faker->dateTimeBetween('-12 month', 'now'),
        ];
    }
}
