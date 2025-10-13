# 🚀 Complete Deployment Guide

> Step-by-step guide untuk deploy portfolio ke GitHub dan Vercel

**Estimasi Waktu**: 15-30 menit

---

## 📋 Table of Contents

1. [Prerequisites](#-prerequisites)
2. [Part 1: Upload ke GitHub](#-part-1-upload-ke-github)
3. [Part 2: Deploy ke Vercel](#-part-2-deploy-ke-vercel)
4. [Part 3: Verification](#-part-3-verification)
5. [Troubleshooting](#-troubleshooting)
6. [Update Workflow](#-update-workflow)

---

## ✅ Prerequisites

Sebelum mulai, pastikan kamu punya:

- [ ] **Node.js 18+** installed ([Download](https://nodejs.org/))
- [ ] **Git** installed ([Download](https://git-scm.com/))
- [ ] **GitHub Account** ([Sign up](https://github.com/))
- [ ] **Vercel Account** ([Sign up](https://vercel.com/))
- [ ] Project sudah jalan di local (`npm run dev` works)

### Check Instalasi

```bash
# Check Node.js
node --version
# Output: v18.x.x atau lebih tinggi

# Check npm
npm --version
# Output: 9.x.x atau lebih tinggi

# Check Git
git --version
# Output: git version 2.x.x
```

---

## 📤 Part 1: Upload ke GitHub

### Step 1.1: Install & Configure Git

**Windows:**
```bash
# Download dari: https://git-scm.com/download/win
# Install dengan default settings
```

**Mac:**
```bash
# Install via Homebrew
brew install git
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get install git

# Fedora
sudo dnf install git
```

**Configure Git:**
```bash
# Set username
git config --global user.name "Your Name"

# Set email (gunakan email GitHub kamu)
git config --global user.email "your.email@example.com"

# Verify
git config --list
```

---

### Step 1.2: Create GitHub Repository

1. **Buka GitHub**: [github.com](https://github.com/)
2. **Login** ke account kamu
3. **Click** tombol **"+"** di kanan atas → **"New repository"**
4. **Isi form**:
   - **Repository name**: `portfolio` (atau nama lain)
   - **Description**: "My professional portfolio website"
   - **Visibility**: Public (atau Private jika mau)
   - **❌ JANGAN** centang "Add a README file"
   - **❌ JANGAN** centang "Add .gitignore"
   - **❌ JANGAN** centang "Choose a license"
5. **Click** "Create repository"

**Result**: Kamu akan lihat halaman dengan instruksi Git commands

---

### Step 1.3: Initialize Git & Upload

**Buka Terminal/Command Prompt** di folder project kamu:

```bash
# 1. Navigate ke folder project
cd C:\Users\USer\OneDrive\사진\Portofolio-WisnuSaputra-2025-main

# 2. Initialize Git repository
git init

# 3. Add all files
git add .

# 4. Commit files
git commit -m "Initial commit: Portfolio website"

# 5. Rename branch ke 'main' (jika perlu)
git branch -M main

# 6. Add remote repository
# GANTI 'yourusername' dan 'portfolio' dengan username & repo name kamu!
git remote add origin https://github.com/yourusername/portfolio.git

# 7. Push ke GitHub
git push -u origin main
```

**⚠️ Jika diminta login:**
- **Username**: GitHub username kamu
- **Password**: Gunakan **Personal Access Token** (bukan password biasa)

**Cara buat Personal Access Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Centang "repo" → Generate token
3. Copy token dan paste sebagai password

---

### Step 1.4: Verify Upload

1. **Refresh** halaman GitHub repository kamu
2. **Check** semua files sudah ter-upload:
   - ✅ `src/` folder
   - ✅ `public/` folder
   - ✅ `package.json`
   - ✅ `.env.example` (template)
   - ✅ `.gitignore`
   - ✅ `README.md`
   - ✅ `DEPLOYMENT-GUIDE.md`
   - ❌ `.env.local` (TIDAK boleh ada - ini file sensitive!)
   - ❌ `node_modules/` (TIDAK boleh ada - terlalu besar!)

**✅ Success!** Files sudah di GitHub!

---

## 🚀 Part 2: Deploy ke Vercel

### Step 2.1: Create Vercel Account

1. **Buka**: [vercel.com](https://vercel.com/)
2. **Click** "Sign Up"
3. **Pilih** "Continue with GitHub"
4. **Authorize** Vercel untuk access GitHub kamu
5. **Done!** Account created

---

### Step 2.2: Import Project

1. **Di Vercel Dashboard**, click **"Add New..."** → **"Project"**
2. **Import Git Repository**:
   - Kamu akan lihat list repository dari GitHub
   - **Find** repository portfolio kamu
   - **Click** "Import"

3. **Configure Project**:
   
   **Project Name**: `portfolio` (atau nama lain)
   
   **Framework Preset**: Next.js (auto-detected ✅)
   
   **Root Directory**: `./` (default)
   
   **Build Command**: 
   ```bash
   node scripts/generate-config.js && next build
   ```
   *(Biasanya sudah auto dari package.json)*
   
   **Output Directory**: `.next` (default)
   
   **Install Command**: `npm install` (default)

---

### Step 2.3: Set Environment Variables

**⚠️ INI BAGIAN PALING PENTING!**

Sebelum deploy, kamu **HARUS** set 2 environment variables:

1. **Di halaman Configure Project**, scroll ke **"Environment Variables"**

2. **Add Variable #1**:
   - **Key**: `NEXT_PUBLIC_BUSINESS_URL`
   - **Value**: `https://your-project-name.vercel.app/business`
   - **Environments**: Centang **Production**, **Preview**, **Development**
   - Click "Add"

3. **Add Variable #2**:
   - **Key**: `NEXT_PUBLIC_PORTFOLIO_URL`
   - **Value**: `https://your-project-name.vercel.app`
   - **Environments**: Centang **Production**, **Preview**, **Development**
   - Click "Add"

**⚠️ PENTING:**
- Ganti `your-project-name` dengan nama project Vercel kamu!
- Nama project Vercel biasanya sama dengan repository name
- Jika project name = `portfolio`, maka URL = `https://portfolio.vercel.app`
- **Business URL** harus ada `/business` di akhir
- **Portfolio URL** TIDAK ada trailing slash

**Example:**
```env
NEXT_PUBLIC_BUSINESS_URL=https://portfolio.vercel.app/business
NEXT_PUBLIC_PORTFOLIO_URL=https://portfolio.vercel.app
```

---

### Step 2.4: Deploy

1. **Click** "Deploy" button
2. **Wait** 2-3 menit (Vercel akan build project kamu)
3. **Watch** build logs:
   ```
   Running "npm install"...
   ✓ Dependencies installed
   
   Running "npm run build"...
   ✓ Generating config.js...
   ✓ Building Next.js...
   ✓ Compiled successfully
   
   Deploying...
   ✓ Deployment ready
   ```

4. **Success!** 🎉
   - Kamu akan lihat confetti animation
   - URL production: `https://your-project-name.vercel.app`

---

## ✅ Part 3: Verification

### Step 3.1: Test Portfolio Site

1. **Click** "Visit" button atau buka URL production
2. **Check**:
   - [ ] Homepage loads correctly
   - [ ] Images displayed
   - [ ] Animations working
   - [ ] No console errors (F12 → Console)

---

### Step 3.2: Test Button Navigation

1. **Di Portfolio homepage**, click **"View Business"** button
2. **Should redirect** ke: `https://your-project-name.vercel.app/business`
3. **Di Business page**, click **"View Portfolio"** button
4. **Should redirect** ke: `https://your-project-name.vercel.app`

**⚠️ Jika button tidak berfungsi:**
```javascript
// Buka browser console (F12)
console.log(window.ENV_CONFIG)

// Should output:
{
  NEXT_PUBLIC_BUSINESS_URL: "https://your-project-name.vercel.app/business",
  NEXT_PUBLIC_PORTFOLIO_URL: "https://your-project-name.vercel.app"
}
```

**Jika undefined:**
1. Check environment variables di Vercel Dashboard
2. Redeploy: Vercel Dashboard → Deployments → Latest → "..." → Redeploy

---

### Step 3.3: Test Mobile Responsive

1. **Buka** site di mobile atau resize browser
2. **Check**:
   - [ ] Layout responsive
   - [ ] Navigation works
   - [ ] Buttons clickable
   - [ ] Images scaled correctly

---

## 🐛 Troubleshooting

### Issue 1: Build Fails - "Module not found: dotenv"

**Error:**
```
Error: Cannot find module 'dotenv'
```

**Solution:**
```bash
# Install dotenv
npm install dotenv --save

# Commit & push
git add package.json package-lock.json
git commit -m "Add dotenv dependency"
git push

# Vercel will auto-redeploy
```

---

### Issue 2: Button Navigation Not Working

**Problem**: Button click tidak redirect

**Solution:**

1. **Check environment variables**:
   - Vercel Dashboard → Settings → Environment Variables
   - Pastikan 2 variables ada: `NEXT_PUBLIC_BUSINESS_URL` dan `NEXT_PUBLIC_PORTFOLIO_URL`

2. **Check browser console**:
   ```javascript
   console.log(window.ENV_CONFIG)
   ```
   - Jika `undefined`, environment variables tidak ter-inject

3. **Redeploy**:
   - Vercel Dashboard → Deployments → Latest → "..." → Redeploy
   - Wait 2-3 menit

---

### Issue 3: Environment Variables Not Loading

**Problem**: `window.ENV_CONFIG` is undefined

**Solution:**

1. **Check `scripts/generate-config.js` exists**:
   ```bash
   ls scripts/generate-config.js
   ```

2. **Check `package.json` build script**:
   ```json
   {
     "scripts": {
       "build": "node scripts/generate-config.js && next build"
     }
   }
   ```

3. **Check environment variables di Vercel**:
   - Settings → Environment Variables
   - Pastikan variables di-set untuk **Production** environment

4. **Manual trigger build**:
   - Vercel Dashboard → Deployments → "..." → Redeploy

---

### Issue 4: .env.local Ter-upload ke GitHub

**Problem**: File `.env.local` ter-commit (BAHAYA!)

**Solution:**

```bash
# 1. Remove from Git (tapi keep di local)
git rm --cached .env.local

# 2. Commit removal
git commit -m "Remove .env.local from repository"

# 3. Push
git push

# 4. Verify .gitignore
cat .gitignore
# Should contain: .env.local
```

**⚠️ Jika sudah ter-push:**
1. Change semua sensitive values di `.env.local`
2. Update environment variables di Vercel
3. Consider regenerate secrets/tokens

---

### Issue 5: Git Push Rejected

**Error:**
```
! [rejected] main -> main (fetch first)
```

**Solution:**
```bash
# Pull changes first
git pull origin main --rebase

# Then push
git push origin main
```

---

### Issue 6: Vercel Build Timeout

**Problem**: Build takes too long (>15 minutes)

**Solution:**

1. **Check `node_modules/` not committed**:
   ```bash
   # Should be in .gitignore
   cat .gitignore | grep node_modules
   ```

2. **Clear Vercel cache**:
   - Vercel Dashboard → Settings → General
   - Scroll to "Build & Development Settings"
   - Click "Clear Cache"
   - Redeploy

3. **Check dependencies**:
   ```bash
   # Remove unused dependencies
   npm prune
   
   # Update package-lock.json
   npm install
   
   # Commit & push
   git add package.json package-lock.json
   git commit -m "Update dependencies"
   git push
   ```

---

## 🔄 Update Workflow

Setelah deploy, untuk update website:

### Quick Update

```bash
# 1. Make changes di code
# Edit files...

# 2. Test locally
npm run dev

# 3. Commit & push
git add .
git commit -m "Update: description of changes"
git push

# 4. Vercel auto-deploy! (2-3 menit)
# Check: Vercel Dashboard → Deployments
```

**✅ Done!** Changes live di production!

---

### Update Environment Variables

**Jika perlu update URLs:**

1. **Vercel Dashboard** → Settings → Environment Variables
2. **Edit** variable yang mau diubah
3. **Save**
4. **Redeploy**:
   - Deployments → Latest → "..." → Redeploy
   - Wait 2-3 menit

---

## 🎯 Best Practices

### Development Workflow

```bash
# 1. Create feature branch
git checkout -b feature/new-section

# 2. Make changes
# Edit files...

# 3. Test locally
npm run dev

# 4. Commit
git add .
git commit -m "Add new section"

# 5. Push branch
git push origin feature/new-section

# 6. Create Pull Request di GitHub
# 7. Merge to main
# 8. Vercel auto-deploy main branch
```

---

### Security Checklist

- [ ] ✅ `.env.local` di `.gitignore`
- [ ] ✅ `node_modules/` di `.gitignore`
- [ ] ✅ `public/config.js` di `.gitignore`
- [ ] ✅ No hardcoded URLs di code
- [ ] ✅ Environment variables di Vercel Dashboard only
- [ ] ✅ `.env.example` committed (template only)

---

### Performance Tips

1. **Optimize Images**:
   - Use Next.js `<Image>` component
   - Compress images before upload
   - Use WebP format

2. **Code Splitting**:
   - Use dynamic imports for large components
   - Lazy load non-critical sections

3. **Caching**:
   - Vercel automatically caches static assets
   - Use `revalidate` for ISR pages

---

## 📊 Monitoring

### Vercel Analytics

1. **Enable Analytics**:
   - Vercel Dashboard → Analytics
   - Click "Enable"

2. **View Metrics**:
   - Page views
   - Unique visitors
   - Performance scores
   - Real User Monitoring (RUM)

---

### Check Deployment Status

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Login
vercel login

# Check deployments
vercel ls

# View logs
vercel logs
```

---

## 🎉 Success Checklist

Setelah deploy, verify:

- [ ] ✅ Site accessible di production URL
- [ ] ✅ Portfolio homepage loads
- [ ] ✅ Business page loads (`/business`)
- [ ] ✅ Button navigation works (Portfolio ↔ Business)
- [ ] ✅ No console errors
- [ ] ✅ Mobile responsive
- [ ] ✅ Images displayed correctly
- [ ] ✅ Animations working
- [ ] ✅ Environment variables configured
- [ ] ✅ GitHub repository updated
- [ ] ✅ `.env.local` NOT in GitHub
- [ ] ✅ Auto-deploy on push works

---

## 📞 Support

**Need help?**

1. **Check Vercel Logs**:
   - Dashboard → Deployments → Click deployment → View Function Logs

2. **Check Browser Console**:
   - F12 → Console tab
   - Look for errors

3. **Vercel Documentation**:
   - [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
   - [Environment Variables](https://vercel.com/docs/environment-variables)

4. **GitHub Issues**:
   - Check repository issues
   - Create new issue if needed

---

## 🎊 Congratulations!

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  🎉 PORTFOLIO DEPLOYED SUCCESSFULLY! 🎉                 │
│                                                         │
│  ✅ GitHub: Repository uploaded                         │
│  ✅ Vercel: Site deployed                               │
│  ✅ Environment: Variables configured                   │
│  ✅ Navigation: Buttons working                         │
│  ✅ Auto-deploy: Enabled on push                        │
│                                                         │
│  🌍 Your portfolio is now LIVE!                         │
│                                                         │
│  Share your URL:                                        │
│  👉 https://your-project-name.vercel.app                │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Next Steps:**

1. ✅ Share portfolio URL dengan teman/recruiter
2. ✅ Add custom domain (optional)
3. ✅ Enable Vercel Analytics
4. ✅ Update content regularly
5. ✅ Monitor performance

**Happy Deploying! 🚀**

---

**Created by**: Wisnu Saputra  
**Last Updated**: 2025  
**Version**: 1.0