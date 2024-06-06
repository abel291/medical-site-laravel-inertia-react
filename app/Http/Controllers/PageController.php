<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentFormRequest;
use App\Http\Resources\DoctorResource;
use App\Http\Resources\PostResource;
use App\Http\Resources\SpecialtyResource;
use App\Http\Resources\SurgeryResource;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Page;
use App\Models\Post;
use App\Models\Specialty;
use App\Models\Surgery;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        $page = Page::select('title', 'entry')->where('type', 'home')->first();
        $specialties = Specialty::select('id', 'slug', 'name', 'entry', 'thumb')->take(5)->get();
        $posts = Post::take(2)->get();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->get();

        // dd($doctors->last()->specialty);
        return Inertia::render('Home/Home', [
            'specialties' => PostResource::collection($specialties),
            'posts' => PostResource::collection($posts),
            'page' => $page,
            'doctors' => DoctorResource::collection($doctors)
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
    public function specialties()
    {
        $page = Page::select('title', 'entry')->where('type', 'specialties')->first();
        $specialties = Specialty::select('id', 'name', 'slug', 'thumb', 'entry')->with('surgeries:id,name,slug,specialty_id')->get();

        $doctors = Doctor::select('id', 'name', 'entry', 'slug', 'thumb', 'specialty_id')->has('specialty')->with('specialty:id,name,slug')->take(4)->inRandomOrder()->get();
        // dd($specialties);
        return Inertia::render('Specialties/Specialties', [
            'page' => $page,
            'specialties' => $specialties,
            'doctors' => $doctors,

        ]);
    }
    public function specialty($slug)
    {
        $specialty = Specialty::with('surgeries', 'meta', 'images', 'doctors')->where('slug', $slug)->firstOrFail();


        return Inertia::render('Specialty/Specialty', [
            'specialty' => new SpecialtyResource($specialty),
        ]);
    }
    public function surgery($slug)
    {
        $surgery = Surgery::with('specialty:id,name,slug,updated_at', 'meta', 'images')->with('doctors')->where('slug', $slug)->firstOrFail();
        $relatedSurgeries = Surgery::where('specialty_id',  $surgery->specialty_id)->whereNot('id', $surgery->id)->get();

        return Inertia::render('Surgery/Surgery', [
            'surgery' => new SurgeryResource($surgery),
            'relatedSurgeries' => SurgeryResource::collection($relatedSurgeries),
        ]);
    }
    public function doctor($slug)
    {
        $doctor = Doctor::with('meta', 'specialty', 'surgeries')->where('slug', $slug)->firstOrFail();
        return Inertia::render('Doctor/Doctor', [
            'doctor' => new DoctorResource($doctor),
        ]);
    }
    public function doctors()
    {
        $page = Page::select('title', 'entry')->where('type', 'doctors')->first();
        $doctors = Doctor::select('id', 'name', 'slug', 'thumb', 'entry', 'updated_at', 'start_date')->with('meta', 'specialties:id,name,slug')->get();
        // dd($doctors->first());
        return Inertia::render('Doctors/Doctors', [
            'doctors' => DoctorResource::collection($doctors),
            'page' => $page
        ]);
    }
    public function contact()
    {
        $page = Page::select('title', 'entry')->where('type', 'contact')->first();


        $email = fake()->email();

        // dd($formFake);
        return Inertia::render('Contact/Contact', [
            'page' => $page,
            // 'doctors' => $doctors,

        ]);
    }

    public function formContact(AppointmentFormRequest $request)
    {

        Appointment::create($request->validated());

        return redirect()->back();
    }
}
