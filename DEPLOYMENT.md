# 🚀 Laravel Portfolio Deployment Guide

Complete guide to deploy your Laravel portfolio to various hosting platforms.

## ✅ Quick Test Locally

Your server is already running at: **http://127.0.0.1:8000**

Open your browser and visit:
- Home: http://127.0.0.1:8000
- Personal Info: http://127.0.0.1:8000/personal-info
- Education: http://127.0.0.1:8000/education
- Experience: http://127.0.0.1:8000/experience

---

## 🌐 Deployment Options

### Option 1: Heroku (Free/Paid - Recommended for Laravel)

#### Step 1: Prepare Your App

```bash
# Navigate to your project
cd "C:\Users\L E N O V O\Desktop\Nipun\portfolio-laravel"

# Initialize git
git init
git add .
git commit -m "Initial commit"
```

#### Step 2: Create Procfile

Create a file named `Procfile` (no extension) in the root:

```
web: vendor/bin/heroku-php-apache2 public/
```

#### Step 3: Deploy to Heroku

```bash
# Install Heroku CLI from: https://devcenter.heroku.com/articles/heroku-cli

# Login to Heroku
heroku login

# Create new app
heroku create nipun-portfolio

# Push to Heroku
git push heroku main

# Set app key
heroku config:set APP_KEY=$(php artisan key:generate --show)

# Open your app
heroku open
```

---

### Option 2: InfinityFree (Free PHP Hosting)

#### Step 1: Sign Up
1. Go to https://infinityfree.net/
2. Create a free account
3. Create a new website

#### Step 2: Prepare Files
```bash
# Optimize for production
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

#### Step 3: Upload Files
1. Use FileZilla or the built-in file manager
2. Upload ALL files to `htdocs` folder
3. Move contents of `public/` folder to root
4. Update `index.php` paths:

```php
// Change these lines in index.php
require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
```

#### Step 4: Configure
1. Update `.env` file with your domain
2. Set proper permissions for storage folders

---

### Option 3: 000webhost (Free PHP Hosting)

#### Step 1: Sign Up
1. Go to https://www.000webhost.com/
2. Create free account
3. Create new website

#### Step 2: Upload via FTP
1. Use FileZilla:
   - Host: files.000webhost.com
   - Username: Your username
   - Password: Your password
   - Port: 21

2. Upload to `public_html` folder

#### Step 3: Configure
Same as InfinityFree - move public folder contents to root

---

### Option 4: Laravel Forge + DigitalOcean (Professional)

#### Step 1: Setup Servers
1. Sign up for Laravel Forge: https://forge.laravel.com
2. Sign up for DigitalOcean: https://www.digitalocean.com
3. Connect DigitalOcean to Forge

#### Step 2: Create Server
1. Click "Create Server" in Forge
2. Choose DigitalOcean as provider
3. Select server size ($6/month recommended)
4. Wait for provisioning

#### Step 3: Deploy Site
1. Click "New Site" in Forge
2. Connect your Git repository
3. Enable Quick Deploy
4. Your site is live!

**Benefits:**
- Automatic SSL certificates
- One-click deployments
- Server monitoring
- Database management
- Professional setup

---

### Option 5: Shared Hosting (cPanel)

#### Step 1: Prepare Files
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

#### Step 2: Upload Files
1. Login to cPanel
2. Go to File Manager
3. Upload all files to `public_html`
4. Move `public/` folder contents to root

#### Step 3: Update Paths
Edit `index.php`:
```php
require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';
```

Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

---

## 🔒 Security Checklist

Before deploying:

```bash
# 1. Set production environment
APP_ENV=production
APP_DEBUG=false

# 2. Generate secure key
php artisan key:generate

# 3. Set proper permissions
chmod -R 755 storage bootstrap/cache
chmod -R 775 storage/logs

# 4. Remove development dependencies
composer install --no-dev --optimize-autoloader

# 5. Clear and cache config
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

## 📝 Environment Variables

Update `.env` for production:

```env
APP_NAME="Nipun Portfolio"
APP_ENV=production
APP_KEY=base64:YOUR_KEY_HERE
APP_DEBUG=false
APP_URL=https://your-domain.com

# No database needed for this portfolio
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=portfolio
# DB_USERNAME=root
# DB_PASSWORD=
```

---

## 🐛 Troubleshooting

### 500 Internal Server Error
**Solutions:**
1. Set `APP_DEBUG=true` temporarily to see error
2. Check storage folder permissions: `chmod -R 775 storage`
3. Clear cache: `php artisan cache:clear`
4. Check `.env` file exists and is configured

### CSS/Images Not Loading
**Solutions:**
1. Check `APP_URL` in `.env` matches your domain
2. Run `php artisan storage:link`
3. Clear browser cache
4. Verify files are in `public/` folder

### 404 on All Routes Except Home
**Solutions:**
1. Enable mod_rewrite on Apache
2. Create proper `.htaccess` in public folder
3. Run `php artisan route:cache`

### File Permission Errors
**Solutions:**
```bash
# Set proper permissions
chmod -R 755 .
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

---

## 📊 Recommended Hosting

| Platform | Price | Best For | Difficulty |
|----------|-------|----------|------------|
| InfinityFree | Free | Testing | Easy |
| 000webhost | Free | Small projects | Easy |
| Heroku | $7/mo | Laravel apps | Medium |
| DigitalOcean + Forge | $11/mo | Professional | Medium |
| AWS Lightsail | $3.50/mo | Scalable | Hard |

---

## 🎯 Post-Deployment

1. **Test all pages** - Visit each route and verify
2. **Check mobile** - Test on mobile devices
3. **SSL Certificate** - Enable HTTPS (Let's Encrypt free)
4. **Domain** - Point custom domain to your server
5. **SEO** - Add meta tags and Google Analytics
6. **Monitor** - Set up uptime monitoring

---

## 📱 Quick Deploy Commands

```bash
# Stop development server
# Press Ctrl+C in the terminal

# Prepare for production
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Create deployment package
# Zip all files except:
# - node_modules/
# - .git/
# - .env (create new on server)

# Upload to your hosting
# Update .env on server
# Set permissions
# Done!
```

---

## 💡 Tips

1. **Always backup** before deploying
2. **Test locally first** before pushing to production
3. **Use version control** (Git) for easy rollback
4. **Monitor logs** - Check `storage/logs/laravel.log`
5. **Keep updated** - Run `composer update` regularly

---

## 🆘 Need Help?

- Laravel Docs: https://laravel.com/docs
- Laravel Forums: https://laracasts.com/discuss
- Stack Overflow: Tag with `laravel`

---

**Good luck with your deployment! 🚀**

Your portfolio is ready to showcase to the world!

