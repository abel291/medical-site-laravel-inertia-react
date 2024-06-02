<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Meta;
use App\Models;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::truncate();
        Tag::truncate();
        Author::truncate();
        $tags = Tag::factory(10)->create();
        $authors = Author::factory(10)->create();
        Post::factory(10)
            ->has(Meta::factory())
            ->state((function (array $attributes) use ($authors) {
                return [
                    'author_id' => $authors->random()->id
                ];
            }))
            ->create()->each(function (Post $post) use ($tags) {
                $post->tags()->sync($tags->random(rand(2, 4)));
            });
    }
}
