<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Database\Eloquent\Builder;

class PostController extends Controller
{
    public function blog(Request $request)
    {
        $page = Page::select('title', 'entry')->where('type', 'blog')->first();

        $search = $request->search;
        $posts = Post::with('tags')
            ->when($search, function (Builder $query, string $search) {
                $query->whereAny(
                    [
                        'title',
                        'entry',
                        'description'
                    ],
                    'LIKE',
                    "%$search%"
                );
            })
            ->get();

        return Inertia::render('Blog/Blog', [
            'page' => $page,
            'posts' => PostResource::collection($posts),
        ]);
    }

    public function post($slug)
    {
        $post = Post::whereSlug($slug)->with('tags', 'meta')->where('active', 1)->firstOrFail();
        $postsRecommended = Post::where('active', 1)
            ->inRandomOrder()->limit(3)
            ->get();
        return Inertia::render('Post/Post', [
            'post' => new PostResource($post),
            'postsRecommended' => PostResource::collection($postsRecommended),
        ]);
    }
}
