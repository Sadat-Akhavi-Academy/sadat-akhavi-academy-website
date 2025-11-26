# Docker Deployment Guide

## Quick Start with Docker

### 1. Build the Image

```bash
docker build -t sadat-akhavi-academy:latest .
```

### 2. Run the Container

```bash
docker run -d \
  --name saa-website \
  -p 80:80 \
  --restart unless-stopped \
  sadat-akhavi-academy:latest
```

### 3. Verify Deployment

```bash
# Check container status
docker ps

# View logs
docker logs saa-website

# Test the website
curl http://localhost
```

## Docker Compose Deployment

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  website:
    build: .
    container_name: saa-website
    ports:
      - "80:80"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

Deploy:

```bash
docker-compose up -d
```

## Production Deployment on Linux VM

### Prerequisites

- Ubuntu 20.04+ or similar Linux distribution
- Docker installed
- Domain configured (if using custom domain)

### Step-by-Step Deployment

1. **Install Docker (if not installed)**

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

2. **Clone Repository or Copy Files**

```bash
git clone <repository-url>
cd sadat-akhavi-academy-website
```

3. **Build and Run**

```bash
# Build the image
docker build -t saa-website:latest .

# Run the container
docker run -d \
  --name saa-website \
  -p 80:80 \
  --restart unless-stopped \
  saa-website:latest
```

4. **Setup with HTTPS (Optional - using nginx-proxy and Let's Encrypt)**

```bash
# Create a network
docker network create web

# Run nginx-proxy
docker run -d \
  --name nginx-proxy \
  --network web \
  -p 80:80 \
  -p 443:443 \
  -v /var/run/docker.sock:/tmp/docker.sock:ro \
  -v nginx-certs:/etc/nginx/certs \
  -v nginx-vhost:/etc/nginx/vhost.d \
  -v nginx-html:/usr/share/nginx/html \
  jwilder/nginx-proxy

# Run Let's Encrypt companion
docker run -d \
  --name nginx-proxy-letsencrypt \
  --network web \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -v nginx-certs:/etc/nginx/certs \
  -v nginx-vhost:/etc/nginx/vhost.d \
  -v nginx-html:/usr/share/nginx/html \
  jrcs/letsencrypt-nginx-proxy-companion

# Run your website with SSL
docker run -d \
  --name saa-website \
  --network web \
  -e VIRTUAL_HOST=sadat-akhavi-academy.com \
  -e LETSENCRYPT_HOST=sadat-akhavi-academy.com \
  -e LETSENCRYPT_EMAIL=contactus@sadat-akhavi-academy.com \
  --restart unless-stopped \
  saa-website:latest
```

## Container Management

### View Logs

```bash
docker logs saa-website
docker logs -f saa-website  # Follow logs
```

### Restart Container

```bash
docker restart saa-website
```

### Stop Container

```bash
docker stop saa-website
```

### Remove Container

```bash
docker stop saa-website
docker rm saa-website
```

### Update Deployment

```bash
# Stop and remove old container
docker stop saa-website
docker rm saa-website

# Rebuild image
docker build -t saa-website:latest .

# Run new container
docker run -d \
  --name saa-website \
  -p 80:80 \
  --restart unless-stopped \
  saa-website:latest
```

## Monitoring

### Resource Usage

```bash
docker stats saa-website
```

### Health Check

```bash
docker inspect --format='{{.State.Health.Status}}' saa-website
```

## Backup and Restore

### Backup

```bash
# Export container
docker export saa-website > saa-website-backup.tar

# Save image
docker save saa-website:latest > saa-website-image.tar
```

### Restore

```bash
# Load image
docker load < saa-website-image.tar

# Run container
docker run -d --name saa-website -p 80:80 saa-website:latest
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs saa-website

# Inspect container
docker inspect saa-website
```

### Port already in use

```bash
# Use different port
docker run -d --name saa-website -p 8080:80 saa-website:latest

# Or stop conflicting service
sudo systemctl stop apache2  # if Apache is running
sudo systemctl stop nginx    # if nginx is running
```

### Performance Issues

```bash
# Check resource usage
docker stats

# Increase container resources (if using Docker Desktop)
# Settings → Resources → Advanced
```

## Security Best Practices

1. **Keep Docker Updated**
```bash
sudo apt update && sudo apt upgrade docker-ce
```

2. **Use Non-Root User in Container** (already implemented in Dockerfile)

3. **Limit Container Resources**
```bash
docker run -d \
  --name saa-website \
  --memory="512m" \
  --cpus="1.0" \
  -p 80:80 \
  saa-website:latest
```

4. **Enable Docker Content Trust**
```bash
export DOCKER_CONTENT_TRUST=1
```

## Multi-Stage Build Benefits

The Dockerfile uses multi-stage builds which:
- Reduces final image size
- Improves security (no build tools in production)
- Uses nginx for optimal static file serving
- Includes gzip compression
- Sets proper cache headers

## Support

For issues or questions:
- Email: contactus@sadat-akhavi-academy.com
- Discord: https://discord.gg/2fA3ypEcHb
