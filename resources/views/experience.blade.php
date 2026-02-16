@extends('layouts.app')

@section('title', 'Experience - Nipun Chamika')

@section('content')
<div class="content-box">
    <h1>Professional Experience</h1>

    <div class="experience-icon">💼</div>

    <div class="experience-card">
        <h3>Trainee - People's Bank</h3>
        <p>
            I have experience working as a Trainee at People's Bank Koggala Branch, where I gained valuable insights into the banking sector and developed strong professional skills.
        </p>
    </div>

    <h3>Key Skills</h3>
    <div class="skills-grid">
        <div class="skill-badge">Marketing</div>
        <div class="skill-badge">Communication</div>
        <div class="skill-badge">Customer Service</div>
    </div>

    <div class="btn-container">
        <a href="{{ route('home') }}" class="back-btn">← Back to Home</a>
    </div>
</div>
@endsection

