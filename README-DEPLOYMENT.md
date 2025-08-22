# Vercel Deployment Guide

## Project Structure
Your portfolio site is now configured for Vercel deployment with the following structure:

```
portfolio/
├── client/                 # React + Vite frontend
├── server/                 # Express backend (local dev)
├── api/                    # Vercel serverless functions
├── shared/                 # Shared TypeScript schemas
├── dist/public/            # Built frontend assets
├── vercel.json            # Vercel deployment configuration
└── package.json           # Main dependencies
```

## Deployment Steps

### 1. Database Setup
Your app uses PostgreSQL. For production deployment:

**Option A: Vercel Postgres (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Add Vercel Postgres
vercel add postgres
```

**Option B: External Database (Neon, Supabase, etc.)**
- Sign up for a managed PostgreSQL service
- Get your connection string
- Add to Vercel environment variables

### 2. Environment Variables
In your Vercel dashboard, add these environment variables:

```
DATABASE_URL=postgresql://username:password@host:5432/database
NODE_ENV=production
```

### 3. Deploy to Vercel

**Method 1: GitHub Integration (Recommended)**
1. Push your code to GitHub
2. Go to vercel.com and connect your GitHub account
3. Import your repository
4. Vercel will automatically detect your configuration
5. Set environment variables in the dashboard
6. Deploy!

**Method 2: Vercel CLI**
```bash
# From your project root
vercel

# Follow the prompts
# Vercel will use your vercel.json configuration
```

### 4. Custom Domain (Optional)
1. In Vercel dashboard → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## Configuration Details

### Frontend Build
- Vite builds to `dist/public/`
- Static assets served by Vercel CDN
- React Router handled by catch-all route

### API Routes
- All API routes go to `/api/*`
- Serverless functions in `api/` directory
- 10-second timeout limit on free tier

### Database
- PostgreSQL with Drizzle ORM
- Connection pooling recommended for production
- Migrations run via `npm run db:push`

## Post-Deployment Checklist

✅ **Test API endpoints**: `https://your-app.vercel.app/api/health`  
✅ **Verify database connection**  
✅ **Check all portfolio sections load correctly**  
✅ **Test contact form (if implemented)**  
✅ **Confirm custom domain (if configured)**  

## Common Issues & Solutions

**CORS Errors**: Already configured in `api/index.js`
**404s on React routes**: Handled by vercel.json rewrites
**Database timeouts**: Use connection pooling
**Build failures**: Check environment variables

## Performance Optimization

Your site includes:
- ✅ Code splitting (vendor/UI chunks)
- ✅ Static asset optimization
- ✅ Vercel CDN distribution
- ✅ Serverless API scaling

## Monitoring

- Vercel Analytics (included with @vercel/analytics)
- Function logs in Vercel dashboard
- Performance insights available

Your portfolio is now ready for professional deployment! 🚀