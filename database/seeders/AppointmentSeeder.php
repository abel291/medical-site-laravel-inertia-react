<?php

namespace Database\Seeders;

use App\Models\Appointment;
use App\Models\Specialty;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $specialties = Specialty::select('id')->with('surgeries:id,specialty_id')->get();
        Appointment::truncate();
        Appointment::factory(rand(5000, 10000))
            ->state(function (array $attributes) use ($specialties) {
                $specialty = fake()->randomElement([$specialties->random(), null]);
                return [
                    'specialty_id' => $specialty?->id,
                    'surgery_id' => $specialty ? $specialty->surgeries->random()->id : null,
                ];
            })->create();
    }
}
