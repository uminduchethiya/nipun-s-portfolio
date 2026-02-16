<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display the home page
     */
    public function home()
    {
        return view('home');
    }

    /**
     * Display the personal information page
     */
    public function personalInfo()
    {
        return view('personal-info');
    }

    /**
     * Display the education page
     */
    public function education()
    {
        return view('education');
    }

    /**
     * Display the experience page
     */
    public function experience()
    {
        return view('experience');
    }
}
