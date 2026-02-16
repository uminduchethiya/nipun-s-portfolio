# Nipun Chamika - Laravel Portfolio

A professional portfolio website built with Laravel 11 and Blade templates.

## 🚀 Features

- ✅ Built with Laravel 11
- ✅ Blade templating engine
- ✅ Modern, responsive design
- ✅ Mobile-friendly
- ✅ Beautiful animations and gradients
- ✅ MVC architecture
- ✅ Clean code structure

## 📁 Project Structure

```
portfolio-laravel/
├── app/
│   └── Http/
│       └── Controllers/
│           └── PortfolioController.php
├── resources/
│   └── views/
│       ├── layouts/
│       │   └── app.blade.php
│       ├── home.blade.php
│       ├── personal-info.blade.php
│       ├── education.blade.php
│       └── experience.blade.php
├── routes/
│   └── web.php
└── public/
    └── images/
        └── my.img (1).jpeg
```

## 🛠️ Installation & Setup

### Prerequisites

- PHP >= 8.2
- Composer
- A web server (Apache/Nginx) or use Laravel's built-in server

### Step 1: Install Dependencies

```bash
cd C:\Users\L E N O V O\Desktop\Nipun\portfolio-laravel
composer install
```

### Step 2: Environment Setup

```bash
# Copy the .env.example file to .env
copy .env.example .env

# Generate application key
php artisan key:generate
```

### Step 3: Run the Development Server

```bash
php artisan serve
```

The application will be available at: **http://localhost:8000**

## 🌐 Routes

| Route | URL | Description |
|-------|-----|-------------|
| home | `/` | Home page with navigation cards |
| personal-info | `/personal-info` | Personal information page |
| education | `/education` | Education qualifications page |
| experience | `/experience` | Professional experience page |

## 🎨 Customization

### Update Profile Image

Replace the image in `public/images/my.img (1).jpeg` with your photo.

### Change Colors

Edit the gradient colors in `resources/views/layouts/app.blade.php`:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace `#667eea` and `#764ba2` with your preferred colors.

### Update Content

Edit the Blade templates in `resources/views/` to update your information:
- `personal-info.blade.php` - Personal details
- `education.blade.php` - Educational background
- `experience.blade.php` - Work experience

## 📦 Deployment

### Deploy to Shared Hosting

1. Build for production:
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

2. Upload files to your hosting server
3. Point the document root to the `public` folder
4. Set permissions:
   - `storage/` and `bootstrap/cache/` folders should be writable

### Deploy to Netlify/Vercel

For static hosting like Netlify:
1. Export the Blade views to static HTML
2. Upload the generated HTML files

**Note:** For full Laravel functionality, you'll need a PHP hosting service like:
- Heroku
- DigitalOcean
- AWS
- Laravel Forge

## 🔧 Artisan Commands

```bash
# Clear all caches
php artisan optimize:clear

# Run development server
php artisan serve

# Run on specific port
php artisan serve --port=8080

# Run on specific host
php artisan serve --host=0.0.0.0 --port=8000
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🐛 Troubleshooting

### Issue: 404 Page Not Found
**Solution:** Run `php artisan route:clear` and restart the server

### Issue: CSS not loading
**Solution:** Clear cache with `php artisan cache:clear`

### Issue: Image not showing
**Solution:** Check if image exists in `public/images/` folder

### Issue: Permission denied errors
**Solution:** Set proper permissions:
```bash
chmod -R 775 storage bootstrap/cache
```

## 📚 Technologies Used

- **Laravel 11** - PHP Framework
- **Blade** - Templating Engine
- **CSS3** - Styling with gradients and animations
- **HTML5** - Semantic markup

## 🎯 Features by Page

### Home Page
- Profile image
- Navigation cards with icons
- Smooth hover effects
- Responsive grid layout

### Personal Information
- Contact details
- Address information
- Email and phone
- Back navigation

### Education
- O/L and A/L results in tables
- Higher education details
- Additional courses
- Color-coded grades

### Experience
- Work history
- Skills showcase
- Professional achievements
- Interactive skill badges

## 📞 Support

For issues or questions:
- Check Laravel documentation: https://laravel.com/docs
- Laravel community: https://laracasts.com/discuss

---

**Built with ❤️ using Laravel & Blade**

© 2026 Nipun Chamika. All rights reserved.

