<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/', [PortfolioController::class, 'home'])->name('home');
Route::get('/personal-info', [PortfolioController::class, 'personalInfo'])->name('personal-info');
Route::get('/education', [PortfolioController::class, 'education'])->name('education');
Route::get('/experience', [PortfolioController::class, 'experience'])->name('experience');
