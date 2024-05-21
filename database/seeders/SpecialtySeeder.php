<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Meta;
use App\Models\Specialty;
use App\Models\Surgery;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

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
            [
                'name' => 'Odontología General',
                'entry' => 'Cuidado dental para toda la familia, desde bebés hasta adultos mayores. Incluímos exámenes, rayos-X de diagnóstico, limpieza, empastes y conductos radiculares.'
            ],
            [
                'name' => 'Odontología Cosmética',
                'entry' => 'Diseño de sonrisa con opciones de tratamiento para todas las edades, incluye blanqueamiento en consultorio o en casa, adhesivo, Invisalign y carillas de porcelana.'
            ],
            [
                'name' => 'Restauración Dental',
                'entry' => 'Cuidado protésico o restauración y reemplazo de dientes perdidos o dañados. Algunos de los tratamientos incluyen coronas, puentes fijos y dentaduras postizas.'
            ],
            [
                'name' => 'Implantes Dentales',
                'entry' => 'Desde la planificación hasta la rehabilitación, los implantes dentales para dientes faltantes son una excelente alternativa para devolver la estética y funcionalidad de los dientes.'
            ],
            [
                'name' => 'Cuidado Endodóntico',
                'entry' => 'Tratamientos de conducto radicular para aliviar el dolor de dientes o la sensibilidad dental y controlar una infección en el tejido blando dentro de tu diente.'
            ],
            [
                'name' => 'Cirugía Oral',
                'entry' => 'Extracciones dentales, incluyendo cordales, remodelación de la mandíbula para localizar dentaduras postizas y más.'
            ],
        ];
        // $specialties = [
        //     'Endocrinología',
        //     'Pediatría',
        //     'Cirugía Plastica',
        //     'Psiquiatría',
        //     'Cardiología',
        //     'Dermatología',
        //     'Oftalmología',
        //     'Otorrinolaringología',
        //     'Odontologia',
        //     'Medicina Intensiva'
        // ];

        foreach ($specialties as $specialty) {
            Specialty::factory()
                ->has(Image::factory()->count(6))
                ->has(Meta::factory())
                ->has(
                    Surgery::factory()
                        ->has(Image::factory()->count(6))
                        ->has(Meta::factory())
                        ->count(rand(2, 3))
                )
                ->create([
                    ...$specialty,
                    'slug' => Str::slug($specialty['name'])
                    // 'name' => $specialty,
                    // 'slug' => Str::slug($specialty)
                ]);
        }
    }
}
