<?php

namespace Database\Factories;

use App\Models\Doctor;
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
            'slug' => fake()->slug(),
            'email' => fake()->email(),
            'email2' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'phone2' => fake()->phoneNumber(),
            'address' => fake()->address(),
            'entry' => fake()->sentence(40, false),
            'description' => fake()->text(700),
            'image' => '/img/doctors/doctor-1.jpg',
            'thumb' => '/img/doctors/doctor-1.jpg',
            'start_date' => fake()->dateTimeBetween('-30 year', '-1 year'),
        ];
    }
}
