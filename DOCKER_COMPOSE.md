# Docker Compose Development Guide

## 🚀 Quick Start for Local Development

### Start Development Server

```bash
docker-compose up dev
```

Your site will be available at: **http://localhost:3000**

The development server includes:
- ✅ Hot reload (changes appear instantly)
- ✅ Source maps for debugging
- ✅ Fast refresh for React components
- ✅ TypeScript error reporting

### Stop Development Server

```bash
docker-compose down
```

---

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `docker-compose up dev` | Start dev server (foreground) |
| `docker-compose up -d dev` | Start dev server (background) |
| `docker-compose logs -f dev` | View logs |
| `docker-compose restart dev` | Restart dev server |
| `docker-compose down` | Stop all services |
| `docker-compose up --build dev` | Rebuild and start |

---

## 🔧 Available Services

### 1. Development Service (default)

```bash
docker-compose up dev
```

- **Port**: 3000
- **Hot reload**: Enabled
- **Volumes**: Source code mounted
- **Use for**: Active development

### 2. Production Service (testing)

```bash
docker-compose --profile production up prod
```

- **Port**: 8080
- **Build**: Production static export
- **Use for**: Testing production build locally

---

## 🛠️ Development Workflow

### 1. First Time Setup

```bash
# Build and start development container
docker-compose up --build dev
```

### 2. Daily Development

```bash
# Start dev server (already built)
docker-compose up dev
```

Edit files in your editor - changes appear automatically!

### 3. Test Production Build

```bash
# Build and test production version
docker-compose --profile production up --build prod

# Visit http://localhost:8080
```

### 4. Clean Up

```bash
# Stop containers
docker-compose down

# Remove volumes (clean slate)
docker-compose down -v

# Remove images
docker-compose down --rmi all
```

---

## 📁 Volume Mounts

The development container mounts:

```yaml
volumes:
  - .:/app                    # Your source code
  - /app/node_modules        # Excludes node_modules (uses container's)
  - /app/.next               # Excludes .next cache
```

This means:
- ✅ Edit files on your host machine
- ✅ Changes appear instantly in container
- ✅ No need to rebuild for code changes

---

## 🔍 Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose logs dev

# Rebuild from scratch
docker-compose build --no-cache dev
docker-compose up dev
```

### Hot reload not working

```bash
# Stop and restart
docker-compose restart dev

# Or use polling (slower but more reliable)
# Already enabled in docker-compose.yml with CHOKIDAR_USEPOLLING=true
```

### Port already in use

```bash
# Change port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Permission issues (Linux)

```bash
# Fix permissions
sudo chown -R $USER:$USER .
```

### Node modules issues

```bash
# Rebuild with clean install
docker-compose down -v
docker-compose up --build dev
```

---

## 🎯 Development Tips

### Run npm commands in container

```bash
# Install new package
docker-compose exec dev npm install package-name

# Run linter
docker-compose exec dev npm run lint

# Run build
docker-compose exec dev npm run build
```

### Shell access

```bash
# Access container shell
docker-compose exec dev sh

# Now you can run any command
npm install
npm run build
exit
```

### View logs

```bash
# Follow logs
docker-compose logs -f dev

# View last 100 lines
docker-compose logs --tail=100 dev
```

---

## 🚢 Production Testing Locally

Before deploying to production, test the build:

```bash
# Build and run production version
docker-compose --profile production up --build prod

# Test at http://localhost:8080

# Stop when done
docker-compose --profile production down
```

---

## 🔄 Common Workflows

### Making changes

1. Start dev server: `docker-compose up dev`
2. Edit files in your editor
3. See changes at http://localhost:3000
4. Stop when done: `Ctrl+C` or `docker-compose down`

### Adding dependencies

```bash
# Install new package
docker-compose exec dev npm install package-name

# Or rebuild container
docker-compose up --build dev
```

### Switching between dev and prod

```bash
# Development
docker-compose up dev

# Production (in another terminal)
docker-compose --profile production up prod
```

Both can run simultaneously on different ports!

---

## 📊 Service Comparison

| Feature | Development | Production |
|---------|------------|------------|
| Port | 3000 | 8080 |
| Hot Reload | ✅ Yes | ❌ No |
| Build Type | Dev | Static export |
| Source Maps | ✅ Yes | ❌ No |
| Use Case | Active coding | Pre-deploy testing |
| Performance | Slower | Optimized |

---

## 🔐 Environment Variables

Add environment variables in `docker-compose.yml`:

```yaml
services:
  dev:
    environment:
      - NODE_ENV=development
      - NEXT_PUBLIC_API_URL=http://localhost:3000
      # Add your variables here
```

Or use `.env` file:

```bash
# Create .env file
echo "NEXT_PUBLIC_API_URL=http://localhost:3000" > .env
```

---

## 🎬 Complete Example Session

```bash
# 1. First time setup
cd /home/administrator/projects/sadat-akhavi-academy-website
docker-compose up --build dev

# 2. Access in browser
# http://localhost:3000

# 3. Make changes in your editor
# Save file → See changes instantly

# 4. Test production build
# In another terminal:
docker-compose --profile production up --build prod
# Visit http://localhost:8080

# 5. Clean up
docker-compose down
```

---

## 🆘 Need Help?

### Quick fixes

```bash
# Nuclear option - clean everything
docker-compose down -v --rmi all
docker-compose up --build dev
```

### Check status

```bash
# List running containers
docker-compose ps

# Check resources
docker stats
```

---

## 📝 Notes

- Development server runs with `npm run dev`
- Changes to `package.json` require rebuild: `docker-compose up --build dev`
- TypeScript errors show in terminal
- Hot reload works for most changes
- Production profile is optional (for testing)

---

**Happy coding! 🚀**

For more information:
- Development setup: Run `docker-compose up dev`
- Production testing: Run `docker-compose --profile production up prod`
- Logs: Run `docker-compose logs -f dev`
