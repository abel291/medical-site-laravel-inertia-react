<?php

namespace App\Http\Controllers;

use App\Http\Requests\AppointmentFormRequest;
use App\Http\Resources\DoctorResource;
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
        $specialties = Specialty::select('id', 'slug', 'name', 'entry', 'thumb')->take(5)->get();
        $posts = Post::take(2)->get();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->get();

        // dd($doctors->last()->specialty);
        return Inertia::render('Home/Home', [
            'specialties' => $specialties,
            'posts' => $posts,
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
        $specialties = Specialty::with('surgeries')->get();
        $doctors = Doctor::has('specialty')->with('specialty')->take(4)->inRandomOrder()->get();
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
        $surgery = Surgery::with('specialty', 'meta', 'images')->with('doctors')->where('slug', $slug)->firstOrFail();
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
    public function contact()
    {
        $page = Page::select('title', 'entry')->where('type', 'contact')->first();
        $doctors = Doctor::has('specialty')->with('specialty')->inRandomOrder()->get();

        $email = fake()->email();
        $specialty = Specialty::select('id')->with('surgeries')->inRandomOrder()->first();
        $formFake = [
            'name' => fake()->name(),
            'phone' => fake()->phoneNumber(),
            'email' => $email,
            'email_confirmation' => $email,
            'message' => fake()->paragraph(),
            'specialty_id' => $specialty->id,
            // 'surgery_id' => $specialty->surgeries->random()->id,
        ];

        // dd($formFake);
        return Inertia::render('Contact/Contact', [
            'page' => $page,
            'doctors' => $doctors,
            'formFake' => $formFake,

        ]);
    }

    public function formContact(AppointmentFormRequest $request)
    {
        // dd($request->all());
        Appointment::create($request->validated());

        return redirect()->back();
    }
}
