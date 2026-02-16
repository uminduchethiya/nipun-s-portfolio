@extends('layouts.app')

@section('title', 'Nipun Chamika - Portfolio')

@section('content')
<header>
    <img src="{{ asset('images/my.img (1).jpeg') }}" alt="Profile Picture" class="profile-image">
    <h1>Nipun Chamika</h1>
    <p class="subtitle">Welcome to My Professional Portfolio</p>
</header>

<div class="menu-cards">
    <div class="card">
        <div class="card-icon">👤</div>
        <h2>Personal Information</h2>
        <p>Learn more about me, my background, and how to get in touch.</p>
        <a href="{{ route('personal-info') }}" class="btn">View Details</a>
    </div>

    <div class="card">
        <div class="card-icon">🎓</div>
        <h2>Education</h2>
        <p>Explore my academic qualifications and educational achievements.</p>
        <a href="{{ route('education') }}" class="btn">View Details</a>
    </div>

    <div class="card">
        <div class="card-icon">💼</div>
        <h2>Experience</h2>
        <p>Discover my professional experience and skills.</p>
        <a href="{{ route('experience') }}" class="btn">View Details</a>
    </div>
</div>

<footer>
    <p>&copy; 2026 Nipun Chamika. All rights reserved.</p>
</footer>
@endsection

