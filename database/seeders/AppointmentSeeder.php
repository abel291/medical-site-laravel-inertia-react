<?php

namespace Database\Seeders;

use App\Models\Appointment;
use App\Models\Page;
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
        $pages = Page::select('id', 'type')->get();
        Appointment::truncate();
        // Appointment::factory(rand(5000, 8000))
        //     ->state(function (array $attributes) use ($specialties) {
        //         $specialty = fake()->randomElement([$specialties->random(), null]);
        //         return [
        //             'specialty_id' => $specialty?->id,
        //             'surgery_id' => $specialty ? $specialty->surgeries->random()->id : null,
        //         ];
        //     })->create();
        $appointments = [];
        for ($i = 0; $i < rand(5000, 8000); $i++) {
            $appointments[$i] = Appointment::factory()->state(function (array $attributes) use ($specialties, $pages) {
                $specialty = fake()->randomElement([$specialties->random(), null]);
                return [
                    'specialty_id' => $specialty?->id,
                    'surgery_id' => $specialty ? $specialty->surgeries->random()->id : null,
                    'page' => $pages->random()->type,
                    'created_at' => fake()->dateTimeBetween('-12 month', 'now'),
                    'updated_at' => fake()->dateTimeBetween('-12 month', 'now'),
                ];
            })->make()->toArray();
        }
        foreach (array_chunk($appointments, 1000) as $key => $value) {
            Appointment::insert($value);
        }
    }
}
