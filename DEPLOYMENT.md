# 🚀 Deployment Guide - Webmate NZ

This guide will help you deploy the Webmate NZ website to Vercel and set up Google Search Console for SEO optimization.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Domain name (optional, Vercel provides free subdomain)

## 🚀 Vercel Deployment

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository: `marsnewbie/webmate-nz`
4. Vercel will automatically detect it's a Vite project

### Step 2: Configure Build Settings

Vercel should auto-detect these settings, but verify:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 3: Environment Variables (Optional)

If you need to add backend functionality later, you can add environment variables in Vercel dashboard.

### Step 4: Deploy

1. Click "Deploy" button
2. Wait for build to complete (usually 1-2 minutes)
3. Your site will be live at `https://webmate-nz.vercel.app`

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Domains" tab
3. Add your custom domain (e.g., `webmate.nz`)
4. Follow DNS configuration instructions

## 🔍 Google Search Console Setup

### Step 1: Verify Ownership

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://webmate.nz` (or your Vercel domain)
3. Choose "HTML tag" verification method
4. Add the meta tag to your `index.html` (already included)

### Step 2: Submit Sitemap

1. In Google Search Console, go to "Sitemaps"
2. Add sitemap URL: `https://webmate.nz/sitemap.xml`
3. Submit for indexing

### Step 3: Monitor Performance

- Check "Performance" tab for search analytics
- Monitor "Coverage" for indexing issues
- Use "URL Inspection" to test specific pages

## 📊 SEO Optimization Checklist

### ✅ Already Implemented

- [x] Meta tags and descriptions
- [x] Open Graph tags for social sharing
- [x] Structured data (JSON-LD)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Mobile-responsive design
- [x] Fast loading times
- [x] Clean URL structure

### 🔧 Additional Steps

1. **Google Analytics** (Optional)
   - Add Google Analytics tracking code
   - Monitor user behavior and conversions

2. **Google My Business** (Recommended)
   - Create business listing for local SEO
   - Add business information and photos

3. **Social Media Integration**
   - Set up Facebook, LinkedIn business pages
   - Link to website from social profiles

## 🌐 Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Performance Monitoring

### Core Web Vitals

Monitor these metrics in Google Search Console:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Lighthouse Scores

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔧 Maintenance

### Regular Updates

1. **Content Updates**: Update portfolio, services, pricing
2. **SEO Monitoring**: Check Google Search Console monthly
3. **Performance**: Monitor Core Web Vitals
4. **Security**: Keep dependencies updated

### Backup Strategy

- Code is version controlled in GitHub
- Vercel automatically handles deployments
- Consider database backup if adding backend features

## 📞 Support

For technical issues:

1. Check Vercel deployment logs
2. Review GitHub repository
3. Contact: info@webmate.nz

## 🎯 Next Steps

After deployment:

1. Set up Google Analytics
2. Create Google My Business listing
3. Submit to local business directories
4. Start content marketing
5. Monitor and optimize SEO performance

---

**Deployment Status**: ✅ Ready for Vercel deployment
**SEO Status**: ✅ Optimized for Google Search
**Performance**: ✅ Optimized for Core Web Vitals
