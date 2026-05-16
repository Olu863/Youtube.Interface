# Deployment to Vercel

## Quick Deploy (Recommended)

### Option 1: GUI Deploy (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial YouTube React app"
   git remote add origin https://github.com/YOUR_USERNAME/youtube-interface
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Click "Add New..." > "Project"
   - Import your GitHub repository
   - Framework: **Select "Vite"** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Done!** Your app is live at: `https://your-project.vercel.app`

---

### Option 2: CLI Deploy

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Follow prompts
# - Set project name
# - Confirm settings
# - Wait for deploy
```

---

## Environment Variables (if needed later)

Create `.env.local` in root:
```
VITE_API_URL=https://api.example.com
```

In your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

On Vercel: Settings > Environment Variables > Add

---

## After Deployment

- **Live URL**: `https://youtube-interface.vercel.app`
- **Automatic Deploys**: Every push to main branch redeploys
- **Preview URLs**: Each pull request gets a preview link
- **Rollback**: Click previous deployment to revert

---

## Troubleshooting

**Error: "Build failed"**
- Check build logs on Vercel dashboard
- Usually missing dependencies in package.json

**Blank page after deploy**
- Check browser console (F12 > Console tab)
- Usually VITE_* environment variables missing

**Images not loading**
- Update image URLs in VideoGrid.jsx
- Use full URLs (https://...) not relative paths

---

## Optimization Tips

1. **Lazy load videos** - Load more when user scrolls
2. **Add real API** - Fetch videos from backend
3. **Image optimization** - Use next/image or compress
4. **Analytics** - Add tracking to see user behavior
