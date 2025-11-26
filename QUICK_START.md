# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 3: Build for Production
```bash
npm run build
```

---

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build static site (output: `out/`) |
| `npm run lint` | Run ESLint |
| `./setup.sh` | Run setup script |

---

## 🐳 Docker Commands

### Development (with Docker Compose)
| Command | Description |
|---------|-------------|
| `docker-compose up dev` | Start dev server with hot reload |
| `docker-compose up -d dev` | Start dev in background |
| `docker-compose logs -f dev` | View logs |
| `docker-compose down` | Stop all services |

### Production
| Command | Description |
|---------|-------------|
| `docker build -t saa-website .` | Build Docker image |
| `docker run -d -p 80:80 saa-website` | Run container |
| `docker ps` | List running containers |
| `docker logs saa-website` | View logs |
| `docker stop saa-website` | Stop container |

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Automatic)
```bash
git push origin production
```
✅ Automatic deployment via GitHub Actions

### Option 2: Docker on VM
```bash
docker build -t saa-website .
docker run -d -p 80:80 --restart unless-stopped saa-website
```

### Option 3: Manual Static Deploy
```bash
npm run build
# Upload 'out/' folder to any static host
```

---

## 📁 Where to Find Things

| What | Where |
|------|-------|
| Home page | `src/app/page.tsx` |
| Product pages | `src/app/pages/[product-name]/page.tsx` |
| Styles | `src/app/globals.css` |
| Images | `public/images/` |
| Components | `src/components/` |
| Configuration | `next.config.js` |

---

## ➕ Adding a New Product Page

1. Create directory: `src/app/pages/new-product/`
2. Create file: `page.tsx`
3. Copy template from existing product page
4. Update product details
5. Add images to `public/images/`
6. Update home page to link to new product

---

## 🔧 Configuration Files

- **next.config.js** - Next.js settings (static export enabled)
- **package.json** - Dependencies and scripts
- **tsconfig.json** - TypeScript configuration
- **Dockerfile** - Docker build instructions
- **.github/workflows/nextjs.yml** - GitHub Actions CI/CD

---

## 🐛 Troubleshooting

### TypeScript Errors
Run: `npm install` - Errors will disappear after installing dependencies

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Docker Build Fails
```bash
# Clear Docker cache
docker system prune -a

# Rebuild
docker build --no-cache -t saa-website .
```

### Images Not Loading
- Ensure images are in `public/images/`
- Use paths like `/images/photo.jpg` (not `../images/`)
- Check image file names match exactly

---

## 📚 Documentation

- **MIGRATION_SUMMARY.md** - What was done
- **README_NEXTJS.md** - Complete guide
- **DOCKER_DEPLOYMENT.md** - Docker guide
- **This file** - Quick reference

---

## 🆘 Getting Help

- **Email**: contactus@sadat-akhavi-academy.com
- **Discord**: https://discord.gg/2fA3ypEcHb
- **Website**: https://sadat-akhavi-academy.com

---

## ✅ Pre-Launch Checklist

- [ ] Run `npm install`
- [ ] Test locally with `npm run dev`
- [ ] Check all product pages
- [ ] Verify images load
- [ ] Test mobile view
- [ ] Build successfully: `npm run build`
- [ ] Test built site: `npx serve out`
- [ ] Commit and push to production branch

---

**Ready to go live? Just push to the production branch!** 🚀
