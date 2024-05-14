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
                'title' => 'Blog',
                'type' => 'blog',
            ],
        ];

        foreach ($pages as $key => $page) {
            Page::factory()->create($page);
        }
    }
}
