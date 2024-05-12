<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Image;
use App\Models\Meta;
use App\Models\Specialty;
use App\Models\Surgery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Doctor::truncate();
        $doctors = Doctor::factory(16)
            ->has(Image::factory()->count(2))
            ->has(Meta::factory())
            ->create();

        Surgery::get()->each(function ($surgery) use ($doctors) {

            $doctorsSelected = $doctors->random(rand(2, 4));

            $surgery->doctors()->sync($doctorsSelected);
        });

        Specialty::with('surgeries.doctors')->get()->each(function ($specialty) {

            $specialty->doctor_id = $specialty->surgeries->random()->doctors->random()->id;
            $specialty->save();
        });
    }
}
