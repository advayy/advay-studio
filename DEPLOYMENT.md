# GitHub Pages & Custom Domain Deployment Guide

Complete step-by-step guide to deploy your artist portfolio to GitHub Pages with a custom domain.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [GitHub Pages Configuration](#github-pages-configuration)
3. [Custom Domain Setup](#custom-domain-setup)
4. [Deployment](#deployment)
5. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Create a GitHub Account
If you don't have one already:
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the registration process
4. Verify your email address

### Step 2: Create a New Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `advay-studio` (or any name you prefer)
   - **Description**: "Contemporary artist portfolio"
   - **Public** ✓ (Required for free GitHub Pages)
3. **Do NOT** check "Initialize this repository with README"
4. Click "Create repository"

### Step 3: Copy the Repository URL

After creating the repository, GitHub will show you a URL like:
```
https://github.com/yourusername/advay-studio.git
```

Copy this URL - you'll need it in the next step.

---

## Local Git Setup

### Step 4: Initialize Your Local Repository

Open Terminal/Command Prompt and navigate to your `advay-studio` folder:

```bash
cd path/to/advay-studio
```

Then run these commands:

```bash
# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: artist portfolio website"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/yourusername/advay-studio.git

# Push to GitHub
git push -u origin main
```

**Replace `yourusername` with your actual GitHub username.**

### Verify Your Files on GitHub

1. Go to your repository on GitHub: `https://github.com/yourusername/advay-studio`
2. You should see all your files listed
3. Click on the different files to verify they uploaded correctly

---

## GitHub Pages Configuration

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under "Source":
   - Select **Branch**: `gh-pages`
   - Select **Folder**: `/ (root)`
5. Click **Save**

**GitHub will now automatically create a `gh-pages` branch.**

### Step 6: Deploy Your Site

```bash
npm run deploy
```

This command:
1. Builds your site (`npm run build`)
2. Copies the CNAME file
3. Pushes everything to the `gh-pages` branch

**Wait 2-3 minutes for deployment to complete.**

### Step 7: Verify Deployment

Your site is now live at:
```
https://yourusername.github.io/advay-studio
```

Visit this URL to confirm everything works!

---

## Custom Domain Setup

You have the custom domain `advay.studio`. Here's how to connect it:

### Step 8: Update DNS at Your Domain Registrar

1. Log in to your domain registrar (domain.com, Namecheap, GoDaddy, etc.)
2. Find **DNS Settings** or **Domain Management**
3. Look for **DNS Records** or **Advanced DNS**

#### Option A: Using CNAME Record (Recommended for Subdomains)

If you want `advay.studio` to point to GitHub Pages:

1. Create a **CNAME** record:
   - **Name/Host**: `@` (or leave blank - means root domain)
   - **Value/Points to**: `yourusername.github.io`
   - **TTL**: 3600 (or default)

2. You may also need to create an **A record** (check your registrar's GitHub Pages docs):
   - **Name**: `@`
   - **Value**: One of GitHub's IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

#### Option B: Using Subdomain

If you want `portfolio.advay.studio`:

1. Create a **CNAME** record:
   - **Name/Host**: `portfolio`
   - **Value/Points to**: `yourusername.github.io`

#### Verify DNS Setup

Use one of these tools to verify your DNS is configured correctly:
- [MXToolbox CNAME Lookup](https://mxtoolbox.com/cname.aspx)
- [What's My DNS](https://www.whatsmydns.net/)

Enter your domain and look for the CNAME pointing to GitHub Pages.

### Step 9: Configure Custom Domain on GitHub

1. Go to your repository **Settings → Pages**
2. Under "Custom domain", enter: `advay.studio`
3. Click **Save**
4. Check "Enforce HTTPS" ✓

**GitHub will automatically create/update the CNAME file.**

### Step 10: Wait for DNS Propagation

DNS changes can take:
- **Immediate**: Usually resolves within seconds
- **Normal**: 5-30 minutes
- **Maximum**: Up to 48 hours

You can check propagation with [What's My DNS](https://www.whatsmydns.net/) - search for your domain and look for the CNAME record.

### Step 11: Verify Custom Domain

1. Wait 5-10 minutes
2. Visit `https://advay.studio` in your browser
3. It should show your portfolio (might show GitHub's 404 page initially)
4. If it still doesn't work after 30 minutes, check:
   - DNS CNAME record is set correctly
   - HTTPS is enforced in GitHub Pages settings
   - CNAME file exists in `dist/CNAME` after building

---

## Ongoing Deployment Workflow

### Making Changes & Updating Your Site

Every time you update content:

```bash
# Make your changes in the code

# Build and deploy to GitHub Pages
npm run deploy

# Or if you just want to build locally first:
npm run build
npm run preview  # Test locally
npm run deploy   # Then deploy
```

### Updating Content

**To change artwork:**
1. Edit `src/js/main.js` - update the `artworks` array
2. Add images to `assets/` folder
3. Run `npm run deploy`

**To change galleries:**
1. Edit `src/js/main.js` - update the `galleries` array
2. Run `npm run deploy`

**To change page text:**
1. Edit `index.html`
2. Run `npm run deploy`

---

## Troubleshooting

### Issue: Site not showing at custom domain

**Solution:**
1. Verify DNS CNAME record: `dig advay.studio` (in Terminal)
   - Should show GitHub's IP or CNAME to GitHub
2. Check GitHub Pages settings:
   - Go to Settings → Pages
   - Custom domain should show your domain
   - "Enforce HTTPS" should be checked
3. Clear browser cache: `Ctrl+Shift+Del` and refresh
4. Try incognito/private window
5. Wait another 10-15 minutes for DNS to propagate

### Issue: Images not loading on deployed site

**Solution:**
1. Check image paths in `index.html` start with `./assets/`
2. Verify images exist in `assets/` folder on GitHub
3. Check browser console for 404 errors (F12 → Console)
4. Rebuild and redeploy: `npm run build && npm run deploy`

### Issue: Changes not appearing after deploy

**Solution:**
1. Wait 30 seconds (GitHub caching)
2. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
3. Check GitHub Actions: Go to repository → Actions tab
4. Verify build completed successfully
5. Check the `gh-pages` branch was updated

### Issue: GitHub Pages shows 404

**Solution:**
1. Check repository is **Public** (Settings → Visibility)
2. Verify `gh-pages` branch exists (should be created automatically)
3. Verify "Source" in Pages settings is set to `gh-pages` branch
4. Wait a few minutes and try again

### Issue: HTTPS not working

**Solution:**
1. Go to Settings → Pages
2. Make sure "Enforce HTTPS" is checked
3. If it's greyed out, wait 5 more minutes (GitHub needs time to provision SSL)
4. Refresh the page

### Issue: Git push rejected

**Solution:**
```bash
# If you get "fatal: 'origin' does not appear to be a git repository"
git remote add origin https://github.com/yourusername/advay-studio.git
git push -u origin main
```

### Issue: Node/npm not found

**Solution:**
1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Restart your terminal
3. Verify: `node --version && npm --version`

---

## DNS Propagation Checklist

- [ ] Domain registered (domain.com)
- [ ] CNAME record created pointing to `yourusername.github.io`
- [ ] DNS updated at domain registrar
- [ ] Custom domain added in GitHub Pages settings
- [ ] HTTPS enforced in GitHub Pages settings
- [ ] CNAME file exists in repository (root)
- [ ] `npm run deploy` completed successfully
- [ ] Waited 5-30 minutes for DNS propagation
- [ ] Visited custom domain - shows your site (not 404 or GitHub's default page)
- [ ] HTTPS works (shows padlock in browser)

---

## Quick Reference Commands

```bash
# Development
npm install        # Install dependencies (first time only)
npm run dev        # Start local development server
npm run preview    # Preview production build locally

# Building & Deployment
npm run build      # Build for production
npm run deploy     # Build and deploy to GitHub Pages

# Git commands
git status         # Check what files changed
git add .          # Stage all changes
git commit -m "Your message"  # Commit changes
git push           # Push to GitHub
git pull           # Pull latest from GitHub
```

---

## Need Help?

1. **Check the README.md** - has customization instructions
2. **GitHub Pages Docs** - https://pages.github.com/
3. **GitHub Help** - https://docs.github.com/
4. **Check your email** - GitHub may send deployment status notifications

---

## Success! 🎉

Your artist portfolio is now:
- ✅ Hosted on GitHub Pages
- ✅ Connected to custom domain `advay.studio`
- ✅ Automatically updated when you push changes
- ✅ Backed up in version control
- ✅ Free and fast

Enjoy sharing your work!
