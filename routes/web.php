<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/acerca-de-nosotros', [PageController::class, 'about'])->name('about');
Route::get('/post/{slug}', [PageController::class, 'home'])->name('post');
Route::get('/services/{slug}', [PageController::class, 'home'])->name('service');
Route::get('/doctor/{slug}', [PageController::class, 'home'])->name('doctor');
Route::get('/dd', [PageController::class, 'home'])->name('home2');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
