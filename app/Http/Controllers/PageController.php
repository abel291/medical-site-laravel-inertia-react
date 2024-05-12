<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Post;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $specialties = Specialty::select('slug', 'name', 'entry', 'thumb')->take(5)->get();
        $posts = Post::take(2)->get();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->get();
        // dd($doctors->last()->specialty);
        return Inertia::render('Home/Home', [
            'specialties' => $specialties,
            'posts' => $posts,
            'doctors' => $doctors
        ]);
    }
}
