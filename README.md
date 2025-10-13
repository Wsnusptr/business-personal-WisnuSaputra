# 🎨 Portfolio - Wisnu Saputra

> Modern & Professional Portfolio Website built with Next.js, React, and Tailwind CSS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

---

## 🚀 Live Demo

- **Portfolio Site**: [your-domain.vercel.app](https://your-domain.vercel.app)
- **Business Site**: [your-domain.vercel.app/business](https://your-domain.vercel.app/business)

---

## ✨ Features

- 🎯 **Dual-Site Architecture** - Portfolio & Business pages with seamless navigation
- ⚡ **Next.js 14** - Latest React framework with App Router
- 🎨 **Tailwind CSS** - Modern utility-first CSS framework
- 📱 **Fully Responsive** - Mobile-first design approach
- 🌐 **Environment Variables** - Secure configuration management
- 🚀 **Vercel Ready** - Optimized for Vercel deployment
- ✅ **TypeScript** - Type-safe development
- 🎭 **Smooth Animations** - Framer Motion & custom CSS animations

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **Framer Motion** | Animations |
| **Vercel** | Hosting & deployment |

---

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# 1. Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Edit .env.local with your local URLs
# NEXT_PUBLIC_BUSINESS_URL=http://localhost:3000
# NEXT_PUBLIC_PORTFOLIO_URL=http://localhost:5500

# 5. Run development server
npm run dev

# 6. Open browser
# Portfolio: http://localhost:5500
# Business: http://localhost:3000
```

---

## 🌐 Deployment

### Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Set Environment Variables**
   
   In Vercel Dashboard → Settings → Environment Variables, add:
   
   ```env
   NEXT_PUBLIC_BUSINESS_URL=https://your-domain.vercel.app/business
   NEXT_PUBLIC_PORTFOLIO_URL=https://your-domain.vercel.app
   ```
   
   ⚠️ **Important**: Replace `your-domain` with your actual Vercel project name!

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

📖 **Need detailed instructions?** See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Portfolio homepage
│   │   ├── business/          # Business site
│   │   └── layout.tsx         # Root layout
│   ├── components/            # React components
│   │   ├── sections/          # Page sections
│   │   └── ui/                # UI components
│   └── styles/                # Global styles
├── public/                    # Static assets
│   ├── images/               # Images
│   └── config.js             # Generated config (auto)
├── scripts/
│   └── generate-config.js    # Config generator
├── .env.local                # Development URLs (not committed)
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── README.md                 # This file
└── DEPLOYMENT-GUIDE.md       # Deployment instructions
```

---

## 🔧 Configuration

### Environment Variables

This project uses environment variables for URL configuration:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_BUSINESS_URL` | Business site URL | `https://your-domain.vercel.app/business` |
| `NEXT_PUBLIC_PORTFOLIO_URL` | Portfolio site URL | `https://your-domain.vercel.app` |

**Development** (`.env.local`):
```env
NEXT_PUBLIC_BUSINESS_URL=http://localhost:3000
NEXT_PUBLIC_PORTFOLIO_URL=http://localhost:5500
```

**Production** (Vercel Dashboard):
```env
NEXT_PUBLIC_BUSINESS_URL=https://your-domain.vercel.app/business
NEXT_PUBLIC_PORTFOLIO_URL=https://your-domain.vercel.app
```

---

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Configuration
npm run config       # Generate config.js manually

# Linting
npm run lint         # Run ESLint
```

---

## 🐛 Troubleshooting

### Button Navigation Not Working

**Problem**: "View Portfolio" or "View Business" button doesn't work

**Solution**:
1. Check browser console: `console.log(window.ENV_CONFIG)`
2. Verify environment variables are set in Vercel Dashboard
3. Redeploy after setting environment variables

### Build Fails on Vercel

**Problem**: Build fails with "Module not found: dotenv"

**Solution**:
```bash
npm install dotenv --save
git add package.json package-lock.json
git commit -m "Add dotenv dependency"
git push
```

### Environment Variables Not Loading

**Problem**: `window.ENV_CONFIG` is undefined

**Solution**:
1. Ensure `scripts/generate-config.js` exists
2. Check `package.json` has `"build": "node scripts/generate-config.js && next build"`
3. Verify environment variables are set for **Production** environment in Vercel

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Wisnu Saputra**

- Portfolio: [your-domain.vercel.app](https://your-domain.vercel.app)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

## 📞 Support

Need help? Check the [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed instructions.

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by Wisnu Saputra

</div>