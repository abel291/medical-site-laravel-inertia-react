<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Page::truncate();
        $pages = [
            [
                'title' => 'Acerca de Nosotros',
                'type' => 'about',
            ],
            [
                'title' => 'Incio',
                'type' => 'home',
            ],
            [
                'title' => 'Especialidades',
                'type' => 'specialties',
            ],
            [
                'title' => 'Medicos',
                'type' => 'doctors',
            ],
            [
                'title' => 'Blog',
                'type' => 'blog',
            ],
            [
                'title' => 'Contact',
                'type' => 'contact',
            ],
        ];

        $newPages = array_map(function ($page) {
            return [
                ...Page::factory()->make($page)->toArray(),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }, $pages);
        Page::insert($newPages);
    }
}
