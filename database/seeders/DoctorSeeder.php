<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Image;
use App\Models\Meta;
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
        $doctors = Doctor::factory(5)
            ->has(Image::factory()->count(2))
            ->has(Meta::factory())
            ->create();

        Surgery::select('id')->get()->each(function ($surgery) use ($doctors) {
            $surgery->doctors()->sync($doctors->random(rand(2, 4)));
        });
    }
}
