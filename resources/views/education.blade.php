@extends('layouts.app')

@section('title', 'Education Qualifications - Nipun Chamika')

@section('content')
<div class="content-box">
    <h1>Education Qualifications</h1>

    <h3>Ordinary Level (G.C.E O/L)</h3>
    <table>
        <tr>
            <th>Subject</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>Mathematics</td>
            <td>A</td>
        </tr>
        <tr>
            <td>History</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Art</td>
            <td>A</td>
        </tr>
        <tr>
            <td>ICT</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Buddhism</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Science</td>
            <td>B</td>
        </tr>
        <tr>
            <td>Sinhala</td>
            <td>B</td>
        </tr>
        <tr>
            <td>English</td>
            <td>B</td>
        </tr>
        <tr>
            <td>Commerce</td>
            <td>C</td>
        </tr>
    </table>

    <h3>Advanced Level (G.C.E A/L)</h3>
    <table>
        <tr>
            <th>Subject</th>
            <th>Grade</th>
        </tr>
        <tr>
            <td>Accounting</td>
            <td>A</td>
        </tr>
        <tr>
            <td>Business Studies</td>
            <td>A</td>
        </tr>
        <tr>
            <td>ICT</td>
            <td>C</td>
        </tr>
        <tr>
            <td>General English</td>
            <td>A</td>
        </tr>
    </table>

    <h3>Higher Education</h3>
    <ul>
        <li>
            <b>Undergraduate</b> - South Eastern University of Sri Lanka
        </li>
        <li>
            <b>CMA (Chartered Management Accountant)</b> - Completed Level 2
        </li>
    </ul>

    <h3>Other Courses</h3>
    <ul>
        <li>ICT Course</li>
        <li>English Course</li>
    </ul>

    <div class="btn-container">
        <a href="{{ route('home') }}" class="back-btn">← Back to Home</a>
    </div>
</div>
@endsection

