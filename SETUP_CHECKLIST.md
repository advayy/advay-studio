# 📋 Setup Checklist - advay.studio

Your complete artist portfolio is ready! Follow these steps to test locally and deploy.

## What You Have

✅ Complete professional portfolio website
✅ Responsive design (mobile, tablet, desktop)
✅ Left sidebar navigation
✅ Collections page with click-to-view details
✅ Gallery/exhibition listings
✅ About, Home, Contact pages
✅ Instagram integration
✅ GitHub Pages deployment ready
✅ Custom domain support (advay.studio)
✅ All files organized and ready

## Repository Structure

```
advay-studio/
├── 📄 index.html                 # Main HTML page
├── 📄 package.json               # Dependencies
├── 📄 vite.config.js             # Build config
├── 📄 CNAME                      # Domain file
├── 📄 .gitignore                 # Git settings
│
├── 📁 src/
│   ├── 📁 js/
│   │   └── main.js               # Navigation & modals
│   └── 📁 styles/
│       └── main.css              # All styling
│
├── 📁 assets/
│   ├── placeholder-1.svg         # Sample artwork 1
│   ├── placeholder-2.svg         # Sample artwork 2
│   ├── placeholder-3.svg         # Sample artwork 3
│   └── placeholder-4.svg         # Sample artwork 4
│
├── 📁 .github/workflows/
│   └── deploy.yml                # Auto-deploy on push
│
├── 📄 README.md                  # Full documentation
├── 📄 QUICKSTART.md              # Fast setup guide
├── 📄 DEPLOYMENT.md              # Detailed deploy guide
├── 📄 generate-placeholders.js    # Image generation script
└── 📄 SETUP_CHECKLIST.md         # This file
```

---

## Phase 1: Local Testing (10 minutes)

### ✅ Check System Requirements

```bash
# Check Node.js is installed
node --version        # Should be v14 or higher

# Check npm is installed
npm --version         # Should be v6 or higher
```

If either fails, install Node.js from [nodejs.org](https://nodejs.org)

### ✅ Install Dependencies

```bash
cd /path/to/advay-studio
npm install
```

**Wait for installation to complete** (1-2 minutes)

### ✅ Start Development Server

```bash
npm run dev
```

Expected output:
```
VITE v6.1.1  ready in XXX ms

➜  Local:   http://localhost:3000/
```

### ✅ Test Website

1. Open browser to `http://localhost:3000`
2. You should see:
   - Left sidebar with navigation
   - Minimalist white background
   - Home page with featured artwork
3. Click through:
   - ✓ Click "Home" link
   - ✓ Click "About" link
   - ✓ Click "Collections" link
   - ✓ Click a piece - modal should open
   - ✓ Click "Contact" link
   - ✓ Click Instagram link (opens Instagram)
4. Mobile test:
   - Press `F12` or `Cmd+Option+I` to open DevTools
   - Click the phone icon (responsive mode)
   - Verify mobile layout works

**Congratulations! Your site works locally! 🎉**

---

## Phase 2: Customize Your Content (15-30 minutes)

### ✅ Update Your Name & Email

**File**: `index.html`

Find and update:
```html
<h1 class="artist-name">Advay Rajguru</h1>  <!-- Change this -->
```

```html
<a href="mailto:hello@advay.studio">  <!-- Change this -->
```

### ✅ Add Your Artwork Images

1. Find images of your work
2. Copy them to the `assets/` folder
3. Keep original filenames or rename like: `artwork-1.jpg`, `artwork-2.jpg`

**File formats**: JPG, PNG (optimize to under 200KB each)

### ✅ Update Artwork Data

**File**: `src/js/main.js`

Find the `artworks` array and update each piece:

```javascript
const artworks = [
    {
        id: 1,
        title: 'Your Title Here',           // ← Change
        year: 2024,                         // ← Change
        medium: 'Acrylic on Canvas',        // ← Change
        dimensions: '120 x 90 cm',          // ← Change
        price: '$5,000',                    // ← Change
        description: 'Your description...', // ← Change
        image: './assets/artwork-1.jpg'     // ← Change path
    },
    // ... repeat for each artwork
];
```

### ✅ Update Gallery/Exhibition History

**File**: `src/js/main.js`

Find the `galleries` array:

```javascript
const galleries = [
    {
        name: 'Gallery Name',
        location: 'City, Province',
        years: '2023 - 2024'
    },
    // ... add all your exhibitions
];
```

### ✅ Update About Section

**File**: `index.html`

Find the About page and update:
```html
<section id="about" class="page about-page">
    <div class="about-text">
        <h2>About</h2>
        <p>Your bio here...</p>
        <p>More about your practice...</p>
    </div>
</section>
```

### ✅ Update Instagram Link

**File**: `index.html`

Find and update your Instagram handle (appears twice):

```html
href="https://instagram.com/YOUR_HANDLE"
```

### ✅ Test Your Changes Locally

The site auto-reloads when you save files. Just:
1. Make a change
2. Save the file
3. Browser updates automatically
4. Verify it looks right

---

## Phase 3: Prepare for Deployment (5 minutes)

### ✅ Make a Production Build

```bash
npm run build
```

Expected output: Creates a `dist/` folder with your optimized website.

### ✅ Preview Production Build

```bash
npm run preview
```

Visit `http://localhost:3000` to verify everything works in production mode.

### ✅ Commit Changes

```bash
git add .
git commit -m "Final customizations: added artwork and content"
```

---

## Phase 4: Deploy to GitHub Pages (10 minutes)

### ✅ Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `advay-studio`
3. **Visibility**: Public
4. **DO NOT** initialize with README
5. Click **Create repository**
6. Copy the URL shown

### ✅ Push to GitHub

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/advay-studio.git

# Push to GitHub
git push -u origin main
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

### ✅ Enable GitHub Pages

1. Go to `github.com/YOUR_USERNAME/advay-studio`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Select branch: `gh-pages`
5. Select folder: `/ (root)`
6. Click **Save**

### ✅ Deploy

```bash
npm run deploy
```

This:
- Builds your site
- Pushes to GitHub `gh-pages` branch
- Automatically deploys

**Wait 2-3 minutes** for deployment to complete.

### ✅ Verify Online

Visit: `https://YOUR_USERNAME.github.io/advay-studio`

You should see your portfolio live online! 🎉

---

## Phase 5: Custom Domain Setup (10-15 minutes)

If you're using `advay.studio` as your custom domain:

### ✅ Configure DNS at domain.com

1. Log in to [domain.com](https://domain.com)
2. Find **DNS Settings** or **Manage Domain**
3. Add a **CNAME Record**:
   - **Name/Host**: `@` (or leave blank)
   - **Value/Points to**: `YOUR_USERNAME.github.io`
   - **TTL**: 3600 (default)
4. Save

### ✅ Configure on GitHub

1. Go to your repo **Settings → Pages**
2. Enter custom domain: `advay.studio`
3. Check "Enforce HTTPS" ✓
4. Click **Save**

### ✅ Wait for DNS Propagation

DNS usually takes:
- **Instant to 5 minutes**: Usually works
- **5-30 minutes**: Most common
- **Up to 48 hours**: Rare, but possible

**Check propagation** at [What's My DNS](https://www.whatsmydns.net/)

### ✅ Verify Custom Domain

Visit: `https://advay.studio`

Your portfolio should load! ✨

---

## Ongoing Updates

After deployment, your workflow is:

```bash
# 1. Make changes to HTML/CSS/JS or add new artwork

# 2. Test locally
npm run dev

# 3. Commit to git
git add .
git commit -m "Update artwork"

# 4. Push to GitHub (auto-deploys via GitHub Actions)
git push

# Done! Your site updates automatically
```

---

## Complete Checklist

### Local Setup
- [ ] Node.js installed
- [ ] `npm install` completed
- [ ] `npm run dev` working
- [ ] Website loads at localhost:3000
- [ ] All pages accessible
- [ ] Mobile responsive works

### Content Customization
- [ ] Updated artist name
- [ ] Updated email address
- [ ] Added artwork images
- [ ] Updated artwork titles, prices, dimensions
- [ ] Updated about section
- [ ] Added gallery/exhibition history
- [ ] Updated Instagram handle
- [ ] Verified all changes locally

### Deployment
- [ ] `npm run build` succeeds
- [ ] GitHub repository created
- [ ] Files pushed to GitHub
- [ ] GitHub Pages enabled (gh-pages branch)
- [ ] `npm run deploy` completed
- [ ] Site lives at `https://YOUR_USERNAME.github.io/advay-studio`

### Custom Domain (if using advay.studio)
- [ ] DNS CNAME record added at registrar
- [ ] Custom domain configured in GitHub Pages
- [ ] HTTPS enforced on GitHub
- [ ] Site loads at `https://advay.studio`
- [ ] Works on mobile
- [ ] Instagram link works

---

## Documentation

- **Quick Start**: [QUICKSTART.md](QUICKSTART.md) - 5-minute setup
- **Full Guide**: [README.md](README.md) - Complete documentation
- **Deployment**: [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deploy steps
- **Troubleshooting**: [DEPLOYMENT.md#troubleshooting](DEPLOYMENT.md#troubleshooting) - Common issues

---

## Estimated Timeline

- **Setup & Test**: 15-20 minutes
- **Customize Content**: 20-45 minutes
- **Deploy to GitHub**: 10 minutes
- **DNS Propagation**: 5-30 minutes
- **Total**: 1-2 hours from start to live

---

## Next Steps

1. ✅ Complete Phase 1 (Local Testing)
2. ✅ Complete Phase 2 (Customize)
3. ✅ Complete Phase 3 (Build)
4. ✅ Complete Phase 4 (Deploy)
5. ✅ Complete Phase 5 (Custom Domain)
6. 🎉 Share your portfolio!

---

## Need Help?

**Installation Issues?**
- Run `node --version` and `npm --version`
- Try: `npm install` again
- See [README.md](README.md)

**Deployment Issues?**
- See [DEPLOYMENT.md#troubleshooting](DEPLOYMENT.md#troubleshooting)
- Check GitHub Actions tab for build status
- Verify files are in `dist/` folder

**Content Questions?**
- See [README.md#customization](README.md#customization)
- Edit `src/js/main.js` for artwork data
- Edit `index.html` for text content

**Domain Issues?**
- See [DEPLOYMENT.md#custom-domain-setup](DEPLOYMENT.md#custom-domain-setup)
- Use [What's My DNS](https://www.whatsmydns.net/) to check DNS
- Wait 10-30 minutes for propagation

---

## Ready? Let's Go! 🚀

Start with Phase 1 and work through each phase. You'll have a professional, live artist portfolio in under 2 hours!

**Questions?** Check the relevant documentation file or GitHub's help docs.

**Happy exhibiting!** 🎨
