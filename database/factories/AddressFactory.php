<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'address' => fake()->address(),
            'map' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963795.4753154747!2d-99.76765966250002!3d19.33335201096194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d20205bada1ae5%3A0xc2adfddebbf7722b!2sHospital%20Espa%C3%B1ol!5e0!3m2!1ses-419!2sco!4v1717241336609!5m2!1ses-419!2sco',
        ];
    }
}
