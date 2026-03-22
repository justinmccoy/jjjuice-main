# 🚀 Deployment Guide for JJJUICE React App

## Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Git installed on your machine

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `jjjuice-main`
5. Keep it public or private (your choice)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Code to GitHub

The repository is already initialized with git. Now connect it to GitHub:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/jjjuice-main.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and sign in (use GitHub to sign in for easier integration)
2. Click "Add New..." → "Project"
3. Import your `jjjuice-main` repository from GitHub
4. Vercel will automatically detect it's a Vite project
5. Verify the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"
7. Wait 1-2 minutes for deployment to complete
8. Your site will be live at: `https://jjjuice-main-xxx.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? jjjuice-main
# - In which directory is your code located? ./
# - Want to override the settings? No

# For production deployment
vercel --prod
```

## Step 4: Add Your Logo

1. Add your `logo.png` file to the `public/` directory
2. Commit and push:
```bash
git add public/logo.png
git commit -m "Add logo"
git push
```
3. Vercel will automatically redeploy with the new logo

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Environment Variables (If Needed)

If you add backend functionality later:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add your variables (e.g., API keys, database URLs)
3. Redeploy for changes to take effect

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every pull request

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Check for updates
npm outdated

# Update dependencies
npm update
```

## Troubleshooting

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally first: `npm run build`

### Logo not showing
- Ensure `logo.png` is in the `public/` directory
- Check the file name matches exactly (case-sensitive)
- Clear browser cache

### Styles not loading
- Check that `src/App.css` is imported in `src/App.jsx`
- Verify CSS file has no syntax errors
- Clear browser cache and hard reload (Ctrl+Shift+R or Cmd+Shift+R)

## Support

For issues with:
- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Vite**: [Vite Documentation](https://vitejs.dev)
- **React**: [React Documentation](https://react.dev)

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add custom domain
3. 🔄 Implement email signup backend
4. 🔄 Add analytics (Google Analytics, Vercel Analytics)
5. 🔄 Set up monitoring and error tracking
6. 🔄 Add SEO meta tags
7. 🔄 Implement social media sharing

---

**Your site is now live! 🎉**

Share your link: `https://your-project.vercel.app`