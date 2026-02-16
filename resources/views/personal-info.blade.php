@extends('layouts.app')

@section('title', 'Personal Information - Nipun Chamika')

@section('content')
<div class="content-box">
    <h1>Personal Information</h1>
    
    <div class="profile-section" style="text-align: center;">
        <img src="{{ asset('images/my.img (1).jpeg') }}" alt="Profile Picture" class="profile-image profile-image-large">
    </div>

    <ul class="info-list">
        <li><b>Full Name:</b> Uduwaka Wadu Acharige Udesh Nipun Chamika</li>
        <li><b>Address:</b> Uswaththa, Mihiripenna, Thalpe</li>
        <li><b>Age:</b> 25 years</li>
        <li><b>Contact Number:</b> 0778017819</li>
        <li><b>Email:</b> unipun97@gmail.com</li>
    </ul>

    <div class="btn-container">
        <a href="{{ route('home') }}" class="back-btn">← Back to Home</a>
    </div>
</div>
@endsection

