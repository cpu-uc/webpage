<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class ReservasController extends Controller
{
    public function index()
    {
        return Inertia::render('Reservas');
    }
}
