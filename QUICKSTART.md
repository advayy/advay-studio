# 🚀 Quick Start Guide

Get your artist portfolio live in 5 minutes.

## Prerequisites
- GitHub account (free at github.com)
- Node.js installed (nodejs.org)
- Your artwork images

## 5-Minute Setup

### 1️⃣ Terminal Setup (3 minutes)

```bash
cd advay-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open browser to `http://localhost:3000` - your site is running! 🎉

### 2️⃣ Create GitHub Repository (1 minute)

1. Go to [github.com/new](https://github.com/new)
2. Name it `advay-studio`
3. Click "Create repository"
4. Copy the URL shown

### 3️⃣ Push to GitHub (1 minute)

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/advay-studio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Deploy to GitHub Pages

### Step 1: Enable GitHub Pages

1. Go to your repo: `github.com/YOUR_USERNAME/advay-studio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Branch: `gh-pages`
5. Click **Save**

### Step 2: Deploy

```bash
npm run deploy
```

**Wait 2-3 minutes...**

Your site is live at: `https://YOUR_USERNAME.github.io/advay-studio`

---

## Add Custom Domain

### At domain.com (or your registrar)

1. Find **DNS Settings**
2. Add **CNAME Record**:
   - Name: `@`
   - Value: `YOUR_USERNAME.github.io`
3. Save

### On GitHub

1. Go to Settings → Pages
2. Enter: `advay.studio` in "Custom domain"
3. Check "Enforce HTTPS"
4. Save

**Wait 10 minutes for DNS to activate...**

Your site is now at: `https://advay.studio` ✨

---

## Customize Your Site

### 📸 Add Your Artwork

1. Add images to `assets/` folder
2. Edit `src/js/main.js`
3. Update the `artworks` array with your pieces
4. Save, then: `npm run deploy`

### 📝 Change Text

Edit `index.html` to change:
- Your name
- About section
- Contact info
- Email address

### 🎨 Change Colors

Edit `src/styles/main.css` - look for `:root` color variables.

### 🖼️ Add Galleries

In `src/js/main.js`, update the `galleries` array with your exhibition history.

---

## Commands Reference

```bash
npm run dev          # Local development (http://localhost:3000)
npm run build        # Build for production
npm run deploy       # Build and deploy to GitHub Pages
```

---

## Troubleshooting

**Can't run `npm run dev`?**
→ Make sure you ran `npm install` first

**Images not showing?**
→ Make sure they're in `assets/` folder and paths in code are `./assets/filename`

**Changes not showing after deploy?**
→ Wait 30 seconds, then hard refresh: `Ctrl+Shift+R`

**Custom domain not working?**
→ Wait 10-15 minutes for DNS. Check it's set correctly at your registrar.

---

## What's Next?

- Read [README.md](README.md) for full documentation
- Read [DEPLOYMENT.md](DEPLOYMENT.md) for detailed setup guide
- Customize colors, fonts, and content
- Add your artwork images
- Share your portfolio! 🎨

---

**Questions?**
- Check the full README.md
- Visit [pages.github.com](https://pages.github.com/)
- GitHub Docs: [docs.github.com](https://docs.github.com/)

Happy exhibiting! 🖼️
