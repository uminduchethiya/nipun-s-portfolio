const fs = require('fs');
const path = require('path');

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create images directory in dist
const imagesDir = path.join(distDir, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Copy image file
const sourceImage = path.join(__dirname, 'public', 'images', 'my.img (1).jpeg');
const destImage = path.join(imagesDir, 'my.img (1).jpeg');
if (fs.existsSync(sourceImage)) {
  fs.copyFileSync(sourceImage, destImage);
  console.log('✅ Image copied successfully');
}

// Common CSS and Layout
const commonStyles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

header {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #667eea;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
  display: block;
  border: 5px solid #667eea;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.profile-image-large {
  width: 200px;
  height: 200px;
}

.content-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.menu-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: bold;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.back-btn {
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: bold;
}

.back-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-container {
  text-align: center;
}

.info-list {
  list-style: none;
  margin: 2rem 0;
}

.info-list li {
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: transform 0.2s ease;
}

.info-list li:hover {
  transform: translateX(10px);
  background: #e9ecef;
}

.info-list b {
  color: #667eea;
  display: inline-block;
  min-width: 150px;
}

h3 {
  color: #764ba2;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

tr:hover td {
  background: #f8f9fa;
}

tr:last-child td {
  border-bottom: none;
}

ul {
  list-style: none;
  margin: 1.5rem 0;
}

ul li {
  padding: 1rem;
  margin-bottom: 0.8rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #667eea;
  transition: transform 0.2s ease;
}

ul li:hover {
  transform: translateX(10px);
  background: #e9ecef;
}

ul li b {
  color: #667eea;
}

.experience-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 5px solid #667eea;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.experience-card:hover {
  transform: translateX(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.experience-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.experience-card p {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.skill-badge {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.skill-badge:hover {
  transform: scale(1.05);
}

footer {
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

footer p {
  color: #666;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .menu-cards {
    grid-template-columns: 1fr;
  }

  .content-box {
    padding: 2rem;
  }

  .info-list b {
    display: block;
    margin-bottom: 0.3rem;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.7rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
`;

function generateHTML(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>${commonStyles}</style>
</head>
<body>
  <div class="container">
    ${content}
  </div>
</body>
</html>`;
}

// Home page
const homeContent = `
<header>
  <img src="images/my.img (1).jpeg" alt="Profile Picture" class="profile-image">
  <h1>Nipun Chamika</h1>
  <p class="subtitle">Welcome to My Professional Portfolio</p>
</header>

<div class="menu-cards">
  <div class="card">
    <div class="card-icon">👤</div>
    <h2>Personal Information</h2>
    <p>Learn more about me, my background, and how to get in touch.</p>
    <a href="personal-info.html" class="btn">View Details</a>
  </div>

  <div class="card">
    <div class="card-icon">🎓</div>
    <h2>Education</h2>
    <p>Explore my academic qualifications and educational achievements.</p>
    <a href="education.html" class="btn">View Details</a>
  </div>

  <div class="card">
    <div class="card-icon">💼</div>
    <h2>Experience</h2>
    <p>Discover my professional experience and skills.</p>
    <a href="experience.html" class="btn">View Details</a>
  </div>
</div>

<footer>
  <p>&copy; 2026 Nipun Chamika. All rights reserved.</p>
</footer>
`;

// Personal Info page
const personalInfoContent = `
<div class="content-box">
  <h1>Personal Information</h1>
  
  <div class="profile-section" style="text-align: center;">
    <img src="images/my.img (1).jpeg" alt="Profile Picture" class="profile-image profile-image-large">
  </div>

  <ul class="info-list">
    <li><b>Full Name:</b> Uduwaka Wadu Acharige Udesh Nipun Chamika</li>
    <li><b>Address:</b> Uswaththa, Mihiripenna, Thalpe</li>
    <li><b>Age:</b> 25 years</li>
    <li><b>Contact Number:</b> 0778017819</li>
    <li><b>Email:</b> unipun97@gmail.com</li>
  </ul>

  <div class="btn-container">
    <a href="index.html" class="back-btn">← Back to Home</a>
  </div>
</div>
`;

// Education page
const educationContent = `
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
    <a href="index.html" class="back-btn">← Back to Home</a>
  </div>
</div>
`;

// Experience page
const experienceContent = `
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
    <a href="index.html" class="back-btn">← Back to Home</a>
  </div>
</div>
`;

// Generate HTML files
fs.writeFileSync(
  path.join(distDir, 'index.html'),
  generateHTML('Nipun Chamika - Portfolio', homeContent)
);
console.log('✅ Generated index.html');

fs.writeFileSync(
  path.join(distDir, 'personal-info.html'),
  generateHTML('Personal Information - Nipun Chamika', personalInfoContent)
);
console.log('✅ Generated personal-info.html');

fs.writeFileSync(
  path.join(distDir, 'education.html'),
  generateHTML('Education Qualifications - Nipun Chamika', educationContent)
);
console.log('✅ Generated education.html');

fs.writeFileSync(
  path.join(distDir, 'experience.html'),
  generateHTML('Experience - Nipun Chamika', experienceContent)
);
console.log('✅ Generated experience.html');

// Create _redirects file for SPA-like routing
fs.writeFileSync(
  path.join(distDir, '_redirects'),
  '/*  /index.html  200'
);
console.log('✅ Created _redirects file');

console.log('\n🎉 Static site generated successfully in dist/ folder!');
console.log('📁 Files created:');
console.log('   - index.html');
console.log('   - personal-info.html');
console.log('   - education.html');
console.log('   - experience.html');
console.log('   - images/my.img (1).jpeg');
console.log('   - _redirects');

