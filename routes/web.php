<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdministratoController;
use App\Http\Controllers\SectionController;
use App\Http\Controllers\DepartmentController;

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
            Route::get('/show/{section}', [SectionController::class, 'show'])->name('administrator.section.show');
            Route::put('/update/{section}', [SectionController::class, 'update'])->name('administrator.section.put');
            Route::delete('/destroy/{section}', [SectionController::class, 'destroy'])->name('administrator.section.destroy');
        });

        /* จัดการข้อมูลหน่วยงาน */
        Route::prefix('/departments')->group(function () {
            Route::get('/get', [DepartmentController::class, 'get'])->name('administrator.department.get');
            Route::post('/post', [DepartmentController::class, 'store'])->name('administrator.department.post');
            Route::get('/show/{department}', [DepartmentController::class, 'show'])->name('administrator.department.show');
            Route::put('/update/{department}', [DepartmentController::class, 'update'])->name('administrator.department.put');
            Route::delete('/destroy/{department}', [DepartmentController::class, 'destroy'])->name('administrator.department.destroy');
        });
    });
});

require __DIR__.'/auth.php';
