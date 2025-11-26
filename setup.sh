#!/bin/bash

# Next.js Migration Setup Script
# This script helps set up the Next.js version of the Sadat Akhavi Academy website

set -e

echo "🚀 Setting up Sadat Akhavi Academy Next.js Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Check if public directory exists and has assets
if [ -d "public/images" ]; then
    echo "✅ Static assets found in public/ directory"
else
    echo "⚠️  Warning: public/images directory not found"
    echo "   Make sure to copy your images to public/images/"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run development server:    npm run dev"
echo "  2. Build for production:      npm run build"
echo "  3. Build Docker image:        docker build -t saa-website ."
echo "  4. Run Docker container:      docker run -d -p 80:80 saa-website"
echo ""
echo "📖 For more information, see README_NEXTJS.md"
echo ""
