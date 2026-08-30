<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('portfolio');
Route::get('/cv', [PortfolioController::class, 'cv'])->name('cv');
