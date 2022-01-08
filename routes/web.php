<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdministratoController;
use App\Http\Controllers\SectionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::prefix('/administrator')->group(function () {
        Route::get('/index', [AdministratoController::class, 'index'])->name('administrator.index');

        /* จัดการข้อมูลแผนก */
        Route::prefix('/section')->group(function () {
            Route::get('/get', [SectionController::class, 'get'])->name('administrator.section.get');
            Route::post('/post', [SectionController::class, 'store'])->name('administrator.section.post');
            Route::delete('/destroy/{section}', [SectionController::class, 'destroy'])->name('administrator.section.destroy');
        });
    });
});

require __DIR__.'/auth.php';
