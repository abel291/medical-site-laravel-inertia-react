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
                'type' => 'Home',
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

        foreach ($pages as $page) {
            Page::factory()->create($page);
        }
    }
}
