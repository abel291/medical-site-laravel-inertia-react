<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Image;
use App\Models\Meta;
use App\Models\Specialty;
use App\Models\Surgery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use function PHPUnit\Framework\isEmpty;

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

        $specialties = Specialty::with('surgeries')->get();

        $specialties->each(function ($specialty) use ($doctors) {

            $doctorsSelectedSpecialty = $doctors->random(rand(1, 3));

            $specialty->doctors()->sync($doctorsSelectedSpecialty);

            $specialty->surgeries->each(function ($surgery) use ($doctorsSelectedSpecialty) {
                $doctorsSelectedSurgeries = $doctorsSelectedSpecialty->random(1, $doctorsSelectedSpecialty->count());
                $surgery->doctors()->sync($doctorsSelectedSurgeries);
            });
        });

        foreach (Doctor::with('specialties')->get() as $key => $doctor) {

            if ($doctor->specialties->isEmpty()) {

                $specialtiesSelected = $specialties->random();
                $doctor->specialties()->sync($specialtiesSelected);
                $doctor->surgeries()->sync($specialtiesSelected->surgeries->random());

                $doctor->specialty_id = $specialtiesSelected->id;
            } else {
                $doctor->specialty_id = $doctor->specialties->random()->id;
            }

            $doctor->save();
        }
    }
}
