<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Page;
use App\Models\Post;
use App\Models\Specialty;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $specialties = Specialty::select('id', 'slug', 'name', 'entry', 'thumb')->take(5)->get();
        $posts = Post::take(2)->get();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->get();
        // dd($doctors->last()->specialty);
        return Inertia::render('Home/Home', [
            'specialties' => $specialties,
            'posts' => $posts,
            'doctors' => $doctors
        ]);
    }
    public function about()
    {
        $page = Page::select('title', 'entry')->where('type', 'about')->first();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->inRandomOrder()->get();
        $doctor = $doctors->random();
        // dd($page);
        return Inertia::render('AboutUs/AboutUs', [
            'page' => $page,
            'doctor' => $doctor,
            'doctors' => $doctors,

        ]);
    }
}
