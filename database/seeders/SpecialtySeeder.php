<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Meta;
use App\Models\Specialty;
use App\Models\Surgery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SpecialtySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Specialty::truncate();
        Surgery::truncate();

        $specialties = [
            'Endocrinología',
            'Pediatría',
            'Gineco obstetricia',
            'Cirugía',
            'Psiquiatría',
            'Cardiología',
            'Dermatología',
            'Gastroenterología',
            'Oftalmología',
            'Otorrinolaringología',
            'Neumología',
            'Neurología',
            'Radiología',
            'Anestesiología',
            'Oncología',
            'Urología',
            'Medicina física y rehabilitación',
            'Medicina Intensiva',
        ];

        foreach ($specialties as $specialty) {
            Specialty::factory()
                ->has(Image::factory()->count(2))
                ->has(Meta::factory())
                ->has(
                    Surgery::factory()
                        ->has(Image::factory()->count(2))
                        ->has(Meta::factory())
                        ->count(rand(1, 5))
                )
                ->create([
                    'name' => $specialty
                ]);
        }
    }
}
