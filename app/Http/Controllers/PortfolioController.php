<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;

class PortfolioController extends Controller
{
    public function index(): View
    {
        return view('portfolio', ['portfolio' => config('portfolio')]);
    }

    public function cv(): View
    {
        return view('cv', ['portfolio' => config('portfolio')]);
    }
}
