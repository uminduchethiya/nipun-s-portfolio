# ⚡ Quick Start Guide - Laravel Portfolio

Get your Laravel portfolio running in 5 minutes!

## 🎯 Your Portfolio is Already Running!

**Local URL:** http://127.0.0.1:8000

Open your browser and visit the links above to see your portfolio! 🎉

---

## 🗂️ What's Been Created

### Blade Templates (Views)
✅ `resources/views/layouts/app.blade.php` - Master layout with all CSS
✅ `resources/views/home.blade.php` - Home page
✅ `resources/views/personal-info.blade.php` - Personal information
✅ `resources/views/education.blade.php` - Education qualifications
✅ `resources/views/experience.blade.php` - Work experience

### Controller
✅ `app/Http/Controllers/PortfolioController.php` - Handles all routes

### Routes
✅ `routes/web.php` - All application routes configured

### Assets
✅ `public/images/my.img (1).jpeg` - Your profile photo

### Documentation
✅ `README_PORTFOLIO.md` - Complete project documentation
✅ `DEPLOYMENT.md` - Deployment guide for various platforms
✅ `QUICKSTART.md` - This file
✅ `Procfile` - Heroku deployment configuration

---

## 🚀 How to Use

### View Your Portfolio Locally

Your server is already running! Just open these URLs:

1. **Home Page**
   - http://127.0.0.1:8000

2. **Personal Info**
   - http://127.0.0.1:8000/personal-info

3. **Education**
   - http://127.0.0.1:8000/education

4. **Experience**
   - http://127.0.0.1:8000/experience

### Stop the Server

Press `Ctrl+C` in the terminal where the server is running

### Start the Server Again

```bash
cd "C:\Users\L E N O V O\Desktop\Nipun\portfolio-laravel"
php artisan serve
```

---

## ✏️ Customize Your Portfolio

### 1. Update Personal Information

Edit: `resources/views/personal-info.blade.php`

```blade
<li><b>Full Name:</b> Your Name Here</li>
<li><b>Email:</b> your.email@example.com</li>
```

### 2. Update Education

Edit: `resources/views/education.blade.php`

Add or modify table rows for your grades and qualifications.

### 3. Update Experience

Edit: `resources/views/experience.blade.php`

Update work experience and skills.

### 4. Change Colors

Edit: `resources/views/layouts/app.blade.php`

Find and replace these color codes:
- `#667eea` - Primary color (purple-blue)
- `#764ba2` - Secondary color (purple)

### 5. Change Profile Photo

Replace the file:
`public/images/my.img (1).jpeg`

Keep the same filename or update references in:
- `resources/views/home.blade.php`
- `resources/views/personal-info.blade.php`

---

## 🌐 Deploy to Internet

Choose one of these platforms:

### Option A: Heroku (Easiest for Laravel)

```bash
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Initialize Git
git init
git add .
git commit -m "Initial commit"

# Login and deploy
heroku login
heroku create your-portfolio-name
git push heroku main
```

Your site will be live at: `https://your-portfolio-name.herokuapp.com`

### Option B: Free PHP Hosting

1. **InfinityFree** - https://infinityfree.net/
2. **000webhost** - https://www.000webhost.com/

See `DEPLOYMENT.md` for detailed instructions.

---

## 📁 Project Structure

```
portfolio-laravel/
│
├── app/
│   └── Http/Controllers/
│       └── PortfolioController.php    ← Controls page logic
│
├── resources/views/
│   ├── layouts/
│   │   └── app.blade.php              ← Master template with CSS
│   ├── home.blade.php                 ← Home page
│   ├── personal-info.blade.php        ← Personal info
│   ├── education.blade.php            ← Education
│   └── experience.blade.php           ← Experience
│
├── routes/
│   └── web.php                        ← URL routes
│
├── public/
│   ├── images/
│   │   └── my.img (1).jpeg            ← Your photo
│   └── index.php                      ← Entry point
│
└── .env                               ← Configuration
```

---

## 🎨 Features

✅ Responsive design (works on mobile, tablet, desktop)
✅ Modern gradient backgrounds
✅ Smooth animations and hover effects
✅ Professional card-based layout
✅ Clean and organized code
✅ Laravel MVC architecture
✅ Blade templating
✅ Easy to customize

---

## 🛠️ Common Commands

```bash
# Start development server
php artisan serve

# Start on different port
php artisan serve --port=8080

# Clear all caches
php artisan optimize:clear

# View all routes
php artisan route:list

# Cache configurations (for production)
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## 📱 Test on Mobile

1. Find your computer's IP address:
   ```bash
   ipconfig
   # Look for IPv4 Address
   ```

2. Start server with host option:
   ```bash
   php artisan serve --host=0.0.0.0 --port=8000
   ```

3. On your phone, visit:
   ```
   http://YOUR_IP_ADDRESS:8000
   ```

---

## ✅ Checklist Before Deploying

- [ ] Test all pages locally
- [ ] Update personal information
- [ ] Update education details
- [ ] Update work experience
- [ ] Replace profile photo
- [ ] Test on mobile device
- [ ] Choose hosting platform
- [ ] Follow deployment guide
- [ ] Test live site
- [ ] Share your portfolio URL!

---

## 🆘 Troubleshooting

### Server won't start
```bash
# Check if port 8000 is in use
# Try different port
php artisan serve --port=8080
```

### Image not showing
- Check file exists: `public/images/my.img (1).jpeg`
- Check file name matches exactly in blade files

### Changes not showing
```bash
# Clear cache
php artisan view:clear
php artisan cache:clear
# Refresh browser (Ctrl+F5)
```

### 404 Error
```bash
# Clear route cache
php artisan route:clear
# Restart server
```

---

## 📚 Learn More

- **Laravel Docs:** https://laravel.com/docs
- **Blade Templates:** https://laravel.com/docs/blade
- **Routing:** https://laravel.com/docs/routing

---

## 🎯 Next Steps

1. ✅ Test your portfolio locally
2. ✅ Customize content and colors
3. ✅ Add your real profile photo
4. ✅ Deploy to a hosting platform
5. ✅ Share on LinkedIn, resume, etc.

---

## 💬 Support

Having issues? Check:
1. `README_PORTFOLIO.md` - Full documentation
2. `DEPLOYMENT.md` - Deployment help
3. Laravel docs - https://laravel.com/docs

---

**Your portfolio is ready! 🎉**

Visit http://127.0.0.1:8000 to see it in action!

