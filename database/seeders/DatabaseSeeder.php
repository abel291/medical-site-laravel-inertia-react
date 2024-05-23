<?php

namespace Database\Seeders;

use App\Models\Doctor;
use App\Models\Image;
use App\Models\Specialty;
use App\Models\Surgery;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        Schema::disableForeignKeyConstraints();

        User::truncate();
        Image::truncate();

        User::factory()->create([
            'name' => 'user User',
            'email' => 'user@user.com',
        ]);

        $this->call([
            SpecialtySeeder::class,
            DoctorSeeder::class,
            PostSeeder::class,
            PageSeeder::class,
        ]);
        Schema::enableForeignKeyConstraints();
    }
}
