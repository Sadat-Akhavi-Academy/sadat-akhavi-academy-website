'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Get year for copyright notice
    const copyrightYearElement = document.getElementById("copyrightYear")
    if (copyrightYearElement) {
      copyrightYearElement.textContent = new Date().getFullYear().toString()
    }

    // Slideshow functionality
    const slides = document.querySelectorAll('.slide') as NodeListOf<HTMLElement>
    const dots = document.querySelectorAll('.dot')
    let currentIndex = 0
    const firstSlideDuration = 3500
    const otherSlidesDuration = 2500
    let slideTimer: NodeJS.Timeout

    function showSlide(index: number) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none'
      })
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index)
      })
    }

    function startSlideshow(auto = true) {
      showSlide(currentIndex)
      if (auto) {
        const duration = currentIndex === 0 ? firstSlideDuration : otherSlidesDuration
        slideTimer = setTimeout(() => {
          currentIndex = (currentIndex + 1) % slides.length
          startSlideshow()
        }, duration)
      }
    }

    // Make functions globally available
    ;(window as any).navigateSlide = (direction: number) => {
      clearTimeout(slideTimer)
      currentIndex = (currentIndex + direction + slides.length) % slides.length
      startSlideshow(false)
    }

    ;(window as any).setSlide = (index: number) => {
      clearTimeout(slideTimer)
      currentIndex = index
      startSlideshow(false)
    }

    // Initialize slideshow
    if (slides.length > 0) {
      startSlideshow()
    }

    // Popup functionality
    const popup = document.getElementById('video-popup')
    const close = document.querySelector('.close')
    
    if (popup && close) {
      popup.style.display = 'flex'

      close.addEventListener('click', () => {
        popup.style.display = 'none'
        const video = document.getElementById('youtube-video') as HTMLIFrameElement
        if (video) video.src = ''
      })

      popup.addEventListener('click', (e) => {
        if (e.target === popup) {
          popup.style.display = 'none'
          const video = document.getElementById('youtube-video') as HTMLIFrameElement
          if (video) video.src = ''
        }
      })
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.getElementById("myNavbar")
      if (navbar) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar w3-card w3-animate-top w3-white"
        } else {
          navbar.className = "w3-bar"
        }
      }

      // Page top button
      const mybutton = document.getElementById("pageTopBtn")
      if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block"
        } else {
          mybutton.style.display = "none"
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Make utility functions globally available
    ;(window as any).toggleFunction = () => {
      const x = document.getElementById("navDemo")
      if (x) {
        if (x.className.indexOf("w3-show") === -1) {
          x.className += " w3-show"
        } else {
          x.className = x.className.replace(" w3-show", "")
        }
      }
    }

    ;(window as any).storeFunction = () => {
      window.location.href = "http://sadatakhaviacademy.etsy.com/"
    }

    ;(window as any).topPageFunction = () => {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }

    ;(window as any).go2HomePageFunction = () => {
      window.location.href = "/"
    }

    ;(window as any).openImage = (imageSrc: string) => {
      window.open(imageSrc, '_blank')
    }

    ;(window as any).showAdvancedContentPopup = () => {
      alert("This section is under active development, and content is coming soon! Stay tuned by joining our social media and Discord server.")
    }

    ;(window as any).productAvailableSoonFunction = () => {
      alert("This product will be available soon. Please join our Discord Server to stay tuned.")
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(slideTimer)
    }
  }, [])

  return null
}
