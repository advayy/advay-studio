# Advay Studio - Artist Portfolio

A professional, minimalist artist portfolio website built with Vite, designed for showcase contemporary work and exhibition history.

## Features

- **Clean, Professional Design** - Minimalist aesthetic with focus on artwork
- **Responsive Layout** - Full mobile and tablet support
- **Left Navigation Sidebar** - Professional gallery-like interface
- **Work Modal Details** - Click to view artwork details, dimensions, prices
- **Gallery Listings** - Showcase exhibition and gallery history
- **Instagram Integration** - Direct link to Instagram profile
- **GitHub Pages Ready** - Configured for easy deployment
- **Three.js Support** - Future-ready for 3D implementations

## Project Structure

```
advay-studio/
├── index.html              # Main entry point
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── CNAME                   # Custom domain config
├── .gitignore              # Git ignore rules
├── src/
│   ├── js/
│   │   └── main.js        # Navigation, modals, data handling
│   └── styles/
│       └── main.css       # All styling (mobile-responsive)
├── assets/                 # Image directory (images go here)
│   ├── placeholder-1.jpg
│   ├── placeholder-2.jpg
│   ├── placeholder-3.jpg
│   └── placeholder-4.jpg
└── README.md              # This file
```

## Quick Start

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/advay-studio.git
cd advay-studio

# Install dependencies
npm install
```

### 2. Development Server

```bash
npm run dev
```

This starts a local server at `http://localhost:3000` with hot-reload.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Customization

### Adding Artwork

Edit `src/js/main.js` and update the `artworks` array:

```javascript
const artworks = [
    {
        id: 1,
        title: 'Your Title',
        year: 2024,
        medium: 'Medium/Technique',
        dimensions: '120 x 90 cm',
        price: '$Price or "Available upon request"',
        description: 'Artwork description...',
        image: './assets/your-image.jpg'
    },
    // ... more artworks
];
```

### Adding Galleries/Exhibitions

Edit `src/js/main.js` and update the `galleries` array:

```javascript
const galleries = [
    {
        name: 'Gallery Name',
        location: 'City, Province',
        years: '2023 - 2024'
    },
    // ... more galleries
];
```

### Updating Content

- **Home Page**: Edit the hero section in `index.html` (`.hero-section`)
- **About Page**: Edit the about text in `index.html` (`.about-text`)
- **Contact**: Edit contact details in `index.html` (`.contact-text`)
- **Artist Name**: Change in `index.html` (`.artist-name`)
- **Email**: Update `mailto:` link in contact section

### Images

1. Create an `assets/` folder in the root directory
2. Add your artwork images (JPG, PNG recommended)
3. Reference them in the `artworks` array: `image: './assets/your-image.jpg'`

**Image Recommendations:**
- JPG format for photographs
- Square aspect ratio (1:1) for consistency
- 800x800px minimum for quality
- Optimize file size (50-200KB per image)

### Color Customization

Edit CSS variables in `src/styles/main.css`:

```css
:root {
    --color-black: #1a1a1a;
    --color-text: #000000;
    --color-white: #ffffff;
    --color-off-white: #f8f7f5;
    --color-gray: #e8e8e8;
    --color-gray-light: #f4f3f1;
}
```

### Typography

Font stack is system fonts (clean and fast). To use custom fonts, add to `src/styles/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap');

h1, h2, h3 {
    font-family: 'Playfair Display', serif;
}
```

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a repository named `advay-studio` (or any name)
3. **Important**: Do NOT initialize with README (you'll push existing files)

### Step 2: Initialize Git Locally

```bash
cd advay-studio
git init
git add .
git commit -m "Initial commit: artist portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/advay-studio.git
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Under "Source":
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click Save

**Note**: The branch `gh-pages` will be created automatically on first deploy.

### Step 4: Deploy

```bash
npm run deploy
```

This builds the site and pushes to the `gh-pages` branch. Your site will be live at:
- `https://yourusername.github.io/advay-studio` (if repo is private name)
- With custom domain: `https://advay.studio`

### Step 5: Custom Domain Setup

#### Option A: Using domain.com (or your registrar)

1. Go to your domain registrar (domain.com, Namecheap, GoDaddy, etc.)
2. Find DNS settings
3. Add a `CNAME` record:
   - Name: `@` or `advay`
   - Value: `yourusername.github.io`
4. Wait 15-30 minutes for DNS to propagate

#### Option B: Subdomain (e.g., portfolio.advay.studio)

Add `CNAME` record:
- Name: `portfolio`
- Value: `yourusername.github.io`

#### On GitHub

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `advay.studio`
3. Check "Enforce HTTPS" ✓
4. Click Save

GitHub will automatically create the CNAME file in your repository.

## Building with Three.js

The project includes Three.js in dependencies. To add 3D elements:

```javascript
// In src/js/main.js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// ... add your Three.js code
```

## Color Palette (Professional High Art)

- **Primary**: Pure Black (#000000) for text
- **Background**: Bright White (#ffffff)
- **Accent 1**: Warm Off-White (#f8f7f5) - sidebar, info blocks
- **Accent 2**: Light Gray (#e8e8e8) - borders, dividers
- **Accent 3**: Warm Gray (#f4f3f1) - subtle backgrounds

This creates a professional, gallery-like aesthetic that lets artwork be the focus.

## Performance Tips

1. **Optimize Images**: Use tools like TinyJPG for compression
2. **Lazy Loading**: Images load on scroll (built-in with modern browsers)
3. **Caching**: GitHub Pages caches assets automatically
4. **Minification**: Vite automatically minifies on build

## Troubleshooting

### Images Not Loading After Deploy

- Check paths start with `./assets/`
- Ensure image files are in the `assets/` folder
- Rebuild and redeploy: `npm run build && npm run deploy`

### Changes Not Showing Live

1. Wait 30 seconds (GitHub Pages caching)
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check the `gh-pages` branch deployment status on GitHub

### Custom Domain Not Working

1. Verify CNAME file exists in root (it should auto-generate)
2. Check DNS CNAME record is correct at your registrar
3. Wait for DNS propagation (up to 48 hours, usually much faster)
4. Use [MXToolbox](https://mxtoolbox.com/cname.aspx) to verify DNS

### Mobile Menu Not Appearing

- The mobile menu toggle appears automatically on screens < 768px
- Check browser DevTools responsive mode

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## Scripts Reference

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages

## License

ISC

## Author

Advay Rajguru

---

**Questions or Issues?**

- Double-check all image paths
- Verify GitHub Pages is enabled in Settings
- Check browser console for errors (F12)
- Review the deployment status in GitHub Actions

**Happy exhibiting! 🎨**
