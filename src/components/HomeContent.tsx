'use client'

import ClientScripts from '@/components/ClientScripts'
import CategorySection from '@/components/CategorySection'
import { getProductsGroupedByCategories, getCategoryDisplayName, getAvailableSoonProducts, type ProductCategory } from '@/data/products'
import Link from 'next/link'

export default function HomeContent() {
  const groupedProducts = getProductsGroupedByCategories()
  const availableSoonProducts = getAvailableSoonProducts()
  
  // Define the order categories should appear on homepage
  const categoryOrder: ProductCategory[] = [
    'new-arrivals',
    'scholarships',
    'training-packages',
    'packaged-kits',
    'electronics-kits',
    'mechanical-structural-kits'
  ]
  return (
    <>
      <ClientScripts />
      
      <div id="video-popup" className="popup">
        <div className="popup-content">
          <span className="close">&times;</span>
          <div className="video-container">
            <iframe 
              id="youtube-video" 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/qB5FXVPfYr4?si=xCalawOYTzMO39WV" 
              frameBorder="0" 
              allow="autoplay; encrypted-media" 
              allowFullScreen
            />
          </div>
          <div className="button-row">
            <div className="button-column w3-hover-text-black">
              <a href="https://sadat-akhavi-academy.eventbrite.com" className="icon-link">
                <div className="w3-center">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
                <div className="w3-center w3-medium">
                  <p>Workshops & Classes Waitlist</p>
                </div>
              </a>
            </div>
            <div className="button-column w3-hover-text-black">
              <a onClick={() => (window as any).storeFunction()} className="icon-link" style={{cursor: 'pointer'}}>
                <div className="w3-center">
                  <i className="fa fa fa-truck" aria-hidden="true"></i>
                </div>
                <div className="w3-center w3-medium">
                  eStore
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w3-top">
        <div className="w3-bar" id="myNavbar">
          <button 
            className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" 
            onClick={() => (window as any).toggleFunction()} 
            title="Toggle Navigation Menu"
            type="button"
            aria-label="Toggle navigation menu"
          >
            <i className="fa fa-bars"></i>
          </button>
          <a href="#home" className="w3-bar-item w3-button">HOME</a>
          <a href="#about" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-user"></i> ABOUT</a>
          <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-th"></i> PORTFOLIO</a>
          <a href="#contact" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-envelope"></i> CONTACT</a>
          <a href="https://sadat-akhavi-academy.eventbrite.com" className="w3-bar-item w3-button w3-hide-small"><i className="fa fa-calendar"></i> WORKSHOPS & CLASSES</a>
          <a onClick={() => (window as any).storeFunction()} className="w3-bar-item w3-button w3-hide-small" style={{cursor: 'pointer'}}><i className="fa fa-truck"></i> eSTORE</a>
        </div>

        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
          <a href="#about" className="w3-bar-item w3-button" onClick={() => (window as any).toggleFunction()}>ABOUT</a>
          <a href="#portfolio" className="w3-bar-item w3-button" onClick={() => (window as any).toggleFunction()}>PORTFOLIO</a>
          <a href="#contact" className="w3-bar-item w3-button" onClick={() => (window as any).toggleFunction()}>CONTACT</a>
          <a href="https://sadat-akhavi-academy.eventbrite.com" className="w3-bar-item w3-button">WORKSHOPS & CLASSES</a>
          <a onClick={() => (window as any).storeFunction()} className="w3-bar-item w3-button" style={{cursor: 'pointer'}}> eSTORE</a>
        </div>
      </div>

      <div className="w3-display-container" style={{marginBottom: '50px', position: 'relative'}} id="home">
        <div className="slideshow-container" style={{position: 'relative', overflow: 'hidden'}}>
          {/* Slides */}
          <div className="slide">
            <img src="/images/ABXX_TT_Plus.JPG" style={{width: '100%'}} alt="Alpha Bike+ & Turbo Thumb+" />
            <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
              style={{bottom: '10%', opacity: 0.7, width: '70%'}}>
              <h2><b>Alpha Bike+ & Turbo Thumb+<br/>Your Ultimate Duo for Adventure</b></h2>
            </div>
          </div>

          <div className="slide">
            <img src="/images/IMG_7846.JPG" style={{width: '100%'}} alt="Call for Adventure" />
            <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
              style={{bottom: '10%', opacity: 0.7, width: '70%'}}>
              <h2><b>Call for Adventure<br/>New to Electronics? Join Our Workshops & Classes and Start Your Journey Today!</b></h2>
            </div>
          </div>

          <div className="slide" style={{display: 'block'}}>
            <img src="/images/alpha-dog_turbo_thumb-IMG_7717.png" style={{width: '100%'}} alt="Alpha Bike & Turbo Thumb" />
            <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
              style={{bottom: '10%', opacity: 0.7, width: '70%'}}>
              <h2><b>Alpha Bike & Turbo Thumb<br/>Perfect Partners</b></h2>
            </div>
          </div>

          <div className="slide">
            <img src="/images/alpha_bike_x.png" style={{width: '100%'}} alt="Alpha Bike X" />
          </div>

          <div className="slide">
            <img src="/images/TT_Plus.JPG" style={{width: '100%'}} alt="Turbo Thumb+" />
            <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
              style={{bottom: '10%', opacity: 0.7, width: '70%'}}>
              <h2><b>Turbo Thumb+ <br/> One Controller for all Your Remote Devices</b></h2>
            </div>
          </div>

          <div className="slide">
            <img src="/images/clockometer_IMG_7795.png" style={{width: '100%'}} alt="Clockometer" />
            <div className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
              style={{bottom: '10%', opacity: 0.7, width: '70%'}}>
              <h2><b>Clockometer <br/> A Revolutionary Way to Experience Time</b></h2>
            </div>
          </div>

          <div className="slide">
            <img src="/images/ElecKit.JPG" style={{width: '100%'}} alt="Electronics Kit" />
          </div>

          <div className="slide">
            <img src="/images/slides/IMG_5239.JPG" style={{width: '100%'}} alt="Workshop" />
          </div>

          <div className="slide">
            <img src="/images/slides/IMG_5255.JPG" style={{width: '100%'}} alt="Workshop" />
          </div>

          <button className="prev" onClick={() => (window as any).navigateSlide(-1)}>&#10094;</button>
          <button className="next" onClick={() => (window as any).navigateSlide(1)}>&#10095;</button>
        </div>

        <div className="dots-container">
          <span className="dot" onClick={() => (window as any).setSlide(0)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(1)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(2)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(3)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(4)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(5)}></span>
          <span className="dot" onClick={() => (window as any).setSlide(6)}></span>
        </div>
      </div>

      <div className="bgimg-4 w3-display-container w3-opacity-min filter-grayscale" id="portfolio">
        <div className="w3-display-middle">
          <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
        </div>
      </div>

      <div className="w3-margin-bottom w3-margin-top">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qB5FXVPfYr4?si=4ShPdq1L3zH6Q976" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      {/* Coming Soon Section */}
      <div style={{ padding: '32px 16px' }}>
        <div className="w3-container" style={{ marginBottom: '40px' }}>
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16" style={{ fontSize: '32px', fontWeight: 'bold' }}>
            <i className="fa fa-rocket w3-margin-right"></i>Available Soon
          </h3>
          {availableSoonProducts.length > 0 ? (
            <div style={{ position: 'relative', padding: '0 60px', marginTop: '24px' }}>
              {/* Left Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('available-soon-container')
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' })
                    // Pause auto-scroll temporarily
                    const scrollDiv = document.querySelector('.available-soon-scroll') as HTMLElement
                    if (scrollDiv) {
                      scrollDiv.style.animationPlayState = 'paused'
                      setTimeout(() => {
                        scrollDiv.style.animationPlayState = 'running'
                      }, 2000)
                    }
                  }
                }}
                className="w3-button w3-black w3-hover-grey"
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 5,
                  padding: '12px 16px',
                  fontSize: '20px',
                  opacity: 0.8
                }}
              >
                &#10094;
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => {
                  const container = document.getElementById('available-soon-container')
                  if (container) {
                    container.scrollBy({ left: 300, behavior: 'smooth' })
                    // Pause auto-scroll temporarily
                    const scrollDiv = document.querySelector('.available-soon-scroll') as HTMLElement
                    if (scrollDiv) {
                      scrollDiv.style.animationPlayState = 'paused'
                      setTimeout(() => {
                        scrollDiv.style.animationPlayState = 'running'
                      }, 2000)
                    }
                  }
                }}
                className="w3-button w3-black w3-hover-grey"
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 5,
                  padding: '12px 16px',
                  fontSize: '20px',
                  opacity: 0.8
                }}
              >
                &#10095;
              </button>

              <div 
                id="available-soon-container"
                style={{ 
                  position: 'relative', 
                  overflow: 'hidden',
                  scrollBehavior: 'smooth'
                }}
                onMouseEnter={() => {
                  const scrollDiv = document.querySelector('.available-soon-scroll') as HTMLElement
                  if (scrollDiv) scrollDiv.style.animationPlayState = 'paused'
                }}
                onMouseLeave={() => {
                  const scrollDiv = document.querySelector('.available-soon-scroll') as HTMLElement
                  if (scrollDiv) scrollDiv.style.animationPlayState = 'running'
                }}
              >
                <div 
                  className="available-soon-scroll"
                  style={{ 
                    display: 'flex', 
                    gap: '16px'
                  }}
                >
                  {/* Double products for seamless infinite loop */}
                  {[...availableSoonProducts, ...availableSoonProducts].map((product, idx) => (
                    <div 
                      key={`${product.productCode}-${idx}`} 
                      style={{ 
                        minWidth: '280px', 
                        flexShrink: 0 
                      }}
                    >
                      <div 
                        onClick={() => {
                          const modal = document.getElementById('available-soon-modal')
                          const modalTitle = document.getElementById('modal-product-title')
                          const modalDescription = document.getElementById('modal-product-description')
                          const modalImage = document.getElementById('modal-product-image') as HTMLImageElement
                          
                          if (modal && modalTitle && modalDescription && modalImage) {
                            modalTitle.textContent = product.title
                            modalDescription.textContent = product.homeSummary
                            modalImage.src = product.mainImage
                            modalImage.alt = product.title
                            modal.style.display = 'block'
                          }
                        }}
                        style={{ textDecoration: 'none', cursor: 'pointer' }}
                      >
                        <div className="w3-card w3-white w3-hover-shadow" style={{ height: '100%', border: '1px solid #ddd', borderRadius: '4px' }}>
                          <img 
                            src={product.mainImage} 
                            alt={product.title} 
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} 
                          />
                          <div style={{ padding: '16px' }}>
                            <h5 style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#000' }}>{product.title}</h5>
                            <p className="w3-text-grey" style={{ margin: '0 0 4px 0', fontSize: '14px' }}>
                              <i className="fa fa-clock-o w3-margin-right"></i>Available Soon
                            </p>
                            <p className="w3-text-grey" style={{ margin: 0, fontSize: '12px', fontStyle: 'italic' }}>
                              <i className="fa fa-tag w3-margin-right"></i>
                              {product.categories.map((cat, index) => (
                                <span key={cat}>
                                  {getCategoryDisplayName(cat as ProductCategory)}
                                  {index < product.categories.length - 1 ? ', ' : ''}
                                </span>
                              ))}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <style jsx>{`
                  .available-soon-scroll {
                    animation: scroll-continuous ${availableSoonProducts.length * 5}s linear infinite;
                  }
                  
                  @keyframes scroll-continuous {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(calc(-296px * ${availableSoonProducts.length}));
                    }
                  }
                `}</style>
              </div>
            </div>
          ) : (
            <div className="w3-row-padding" style={{ marginTop: '24px' }}>
              <div className="w3-col l12 m12 s12">
                <div className="w3-card w3-white" style={{ padding: '24px', textAlign: 'center' }}>
                  <i className="fa fa-cog fa-spin" style={{ fontSize: '48px', color: '#f44336', marginBottom: '16px' }}></i>
                  <h4 style={{ marginBottom: '8px', fontWeight: 'bold' }}>Exciting New Products in Development</h4>
                  <p className="w3-text-grey" style={{ fontSize: '16px', lineHeight: '1.6' }}>
                    We&apos;re working on amazing new robotics kits and educational projects! 
                    Stay tuned for innovative products that will take your STEM learning to the next level.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Available Soon Modal */}
      <div id="available-soon-modal" className="w3-modal" style={{ display: 'none' }}>
        <div className="w3-modal-content w3-animate-zoom" style={{ maxWidth: '600px' }}>
          <div className="w3-container" style={{ padding: '32px' }}>
            <span 
              onClick={() => {
                const modal = document.getElementById('available-soon-modal')
                if (modal) modal.style.display = 'none'
              }}
              className="w3-button w3-display-topright w3-hover-red"
              style={{ fontSize: '24px', padding: '8px 16px' }}
            >
              &times;
            </span>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <i className="fa fa-rocket" style={{ fontSize: '48px', color: '#f44336', marginBottom: '16px' }}></i>
              <h3 style={{ margin: '0 0 8px 0', fontWeight: 'bold' }} id="modal-product-title">Product Name</h3>
              <p style={{ fontSize: '18px', color: '#ff9800', fontWeight: 'bold', margin: '8px 0' }}>
                <i className="fa fa-clock-o w3-margin-right"></i>Available Soon - Stay Tuned!
              </p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <img 
                id="modal-product-image"
                src="" 
                alt="Product" 
                style={{ width: '100%', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px' }} 
              />
            </div>
            <p id="modal-product-description" style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', textAlign: 'center' }}>
              Product description will appear here
            </p>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button 
                onClick={() => {
                  const modal = document.getElementById('available-soon-modal')
                  if (modal) modal.style.display = 'none'
                }}
                className="w3-button w3-black w3-hover-grey"
                style={{ padding: '12px 32px', fontSize: '16px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Classes & Scholarships Coming Soon Modal */}
      <div id="classes-scholarships-modal" className="w3-modal" style={{ display: 'none' }}>
        <div className="w3-modal-content w3-animate-zoom" style={{ maxWidth: '600px' }}>
          <div className="w3-container" style={{ padding: '32px' }}>
            <span 
              onClick={() => {
                const modal = document.getElementById('classes-scholarships-modal')
                if (modal) modal.style.display = 'none'
              }}
              className="w3-button w3-display-topright w3-hover-red"
              style={{ fontSize: '24px', padding: '8px 16px' }}
            >
              &times;
            </span>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <i className="fa fa-rocket" style={{ fontSize: '48px', color: '#f44336', marginBottom: '16px' }}></i>
              <h3 style={{ margin: '0 0 8px 0', fontWeight: 'bold' }} id="cs-modal-title">Coming Soon</h3>
              <p style={{ fontSize: '18px', color: '#ff9800', fontWeight: 'bold', margin: '8px 0' }}>
                <i className="fa fa-clock-o w3-margin-right"></i>Available Soon - Stay Tuned!
              </p>
            </div>
            <p id="cs-modal-description" style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', textAlign: 'center', marginBottom: '24px' }}>
              Description will appear here
            </p>
            <div style={{ textAlign: 'center', marginTop: '24px' }}>
              <button 
                onClick={() => {
                  const modal = document.getElementById('classes-scholarships-modal')
                  if (modal) modal.style.display = 'none'
                }}
                className="w3-button w3-black w3-hover-grey"
                style={{ padding: '12px 32px', fontSize: '16px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render products grouped by categories with horizontal scrolling */}
      <div style={{ padding: '32px 16px' }}>
        {categoryOrder.map((category) => {
          // Filter out Available Soon products from category sections
          const products = groupedProducts[category].filter(p => !p.isAvailableSoon)
          
          // Skip empty categories
          if (products.length === 0) return null
          
          return (
            <CategorySection 
              key={category}
              categoryName={getCategoryDisplayName(category)}
              products={products}
            />
          )
        })}
      </div>

      {/* Classes and Scholarships Section */}
      <div style={{ padding: '32px 16px', backgroundColor: '#f9f9f9' }}>
        <div className="w3-container" style={{ marginBottom: '40px' }}>
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16" style={{ fontSize: '32px', fontWeight: 'bold' }}>
            <i className="fa fa-graduation-cap w3-margin-right"></i>Classes & Scholarships
          </h3>
          <div className="w3-row-padding" style={{ marginTop: '24px' }}>
            {/* Classes Card */}
            <div className="w3-col l6 m6 s12" style={{ marginBottom: '16px' }}>
              <div className="w3-card w3-white w3-hover-shadow" style={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src="/images/scholarshipsNclasses/soldering-1038517_640.jpg" 
                  alt="Workshops & Classes" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <i className="fa fa-calendar" style={{ fontSize: '48px', color: '#2196F3', marginBottom: '16px' }}></i>
                  <h4 style={{ marginBottom: '16px', fontWeight: 'bold' }}>Workshops & Classes</h4>
                  <p className="w3-text-grey" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    Join our hands-on workshops and classes to learn electronics, robotics, and programming. 
                    Perfect for beginners and enthusiasts alike!
                  </p>
                  <button 
                    onClick={() => {
                      const modal = document.getElementById('classes-scholarships-modal')
                      const modalTitle = document.getElementById('cs-modal-title')
                      const modalDescription = document.getElementById('cs-modal-description')
                      
                      if (modal && modalTitle && modalDescription) {
                        modalTitle.textContent = 'Workshops & Classes'
                        modalDescription.textContent = 'Exciting workshops and classes are coming soon! Stay tuned for hands-on learning experiences in electronics, robotics, and programming.'
                        modal.style.display = 'block'
                      }
                    }}
                    className="w3-button w3-blue w3-hover-indigo"
                    style={{ padding: '12px 32px', fontSize: '16px', cursor: 'pointer' }}
                  >
                    <i className="fa fa-clock-o w3-margin-right"></i>Coming Soon
                  </button>
                </div>
              </div>
            </div>

            {/* Scholarships Card */}
            <div className="w3-col l6 m6 s12" style={{ marginBottom: '16px' }}>
              <div className="w3-card w3-white w3-hover-shadow" style={{ height: '100%', overflow: 'hidden' }}>
                <img 
                  src="/images/scholarshipsNclasses/diploma-9595340_640.png" 
                  alt="Scholarships Available" 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '32px', textAlign: 'center' }}>
                  <i className="fa fa-graduation-cap" style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '16px' }}></i>
                  <h4 style={{ marginBottom: '16px', fontWeight: 'bold' }}>Scholarships Available</h4>
                  <p className="w3-text-grey" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
                    We offer scholarships to support passionate learners. 
                    Apply now to get access to our courses and kits at reduced or no cost!
                  </p>
                  <button 
                    onClick={() => {
                      const modal = document.getElementById('classes-scholarships-modal')
                      const modalTitle = document.getElementById('cs-modal-title')
                      const modalDescription = document.getElementById('cs-modal-description')
                      
                      if (modal && modalTitle && modalDescription) {
                        modalTitle.textContent = 'Scholarships'
                        modalDescription.textContent = 'Our scholarship program will be launching soon! We&apos;re committed to making STEM education accessible. Stay tuned for application details.'
                        modal.style.display = 'block'
                      }
                    }}
                    className="w3-button w3-green w3-hover-teal"
                    style={{ padding: '12px 32px', fontSize: '16px', cursor: 'pointer' }}
                  >
                    <i className="fa fa-clock-o w3-margin-right"></i>Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bgimg-2 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}}>
          <button className="w3-button w3-padding-large w3-orange" style={{marginTop: '64px'}} onClick={() => (window as any).storeFunction()}>VISIT OUR e-STORE</button>
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64 w3-panel" style={{marginTop: '5rem', marginBottom: '5rem'}} id="portfolio">
        <h3 className="w3-center" style={{marginBottom: '5rem'}}>SKILLS WE HELP YOU MASTER</h3>
        
        <div className="w3-row-padding w3-center">
          <div className="w3-col m3">
            <img src="/images/flat-2126877_1280.png" style={{width: '100%'}} className="w3-hover-opacity" alt="Robotics - Learn robot design and programming" />
            <p>Robotics</p>
          </div>
      
          <div className="w3-col m3">
            <img src="/images/computer-8671934_1280.png" style={{width: '100%'}} className="w3-hover-opacity" alt="Electronics & Design - Circuit design and PCB layout" />
            <p>Electronics & Design</p>
          </div>
      
          <div className="w3-col m3">
            <img src="/images/3d-printer-3308168_1280.png" style={{width: '100%'}} className="w3-hover-opacity" alt="3D Design & Printing - CAD modeling and 3D printing" />
            <p>3D Design & Printing</p>
          </div>
      
          <div className="w3-col m3">
            <img src="/images/hexagon-2307350_1280.png" style={{width: '100%'}} className="w3-hover-opacity" alt="Coding - Programming Arduino ESP32 and embedded systems" />
            <p>Coding</p>
          </div>
        </div>
      </div>

      <div id="modal01" className="w3-modal w3-black" onClick={(e) => (e.target as HTMLElement).style.display = 'none'}>
        <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i className="fa fa-remove"></i></span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
          <img id="img01" className="w3-image" alt="" />
          <p id="caption" className="w3-opacity w3-large"></p>
        </div>
      </div>

      <div className="bgimg-3 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity w3-hide-small">LET&apos;S MAKE SOMETHING AMAZING TOGETHER!</span>
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">WORKSHOPS & CLASSES</h3>
        <p className="w3-center"><em>Learn more and gain hands-on experience.</em></p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <a href="https://sadat-akhavi-academy.eventbrite.com">
              <img src="/images/Eventbrite-Logo-Big1.png" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Eventbrite" width="500" height="333" />
            </a>
          </div>
      
          <div className="w3-col m6 w3-padding-large">
            <p> 
              Come and join our workshops & classes to discover more and develop practical skills through engaging, hands-on experiences. Our workshops & classes are fun, interactive, and designed for people of all ages who are eager to learn in a practical and innovative way.
              <a href="https://sadat-akhavi-academy.eventbrite.com"> Workshops & Classes</a>
            </p>
          </div>
        </div>
      </div>

      <div className="w3-margin-bottom w3-margin-top">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qB5FXVPfYr4?si=4ShPdq1L3zH6Q976" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT US</h3>
        <p className="w3-center"><em>Education is where our heart is.</em></p>
        <div className="w3-row">
          <div className="w3-col m6 w3-center w3-padding-large">
            <img src="/images/saa_logo_12.png" className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Sadat Akhavi Academy Logo" width="500" height="333" />
          </div>
      
          <div className="w3-col m6 w3-padding-large">
            <p>Our mission is to make STEM learning fun, engaging, and accessible to people of all ages through practical, engaging, and innovative designs.</p>
          </div>
        </div>
      </div>

      <div className="w3-content w3-container w3-padding-64" id="contact">
        <p className="w3-center"><em>We&apos;d love your feedback!</em></p>
        <div className="w3-center">
          <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-center"></i> contactus [a-t sign] sadat-akhavi-academy.com<br/>
        </div>
      </div>

      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div className="w3-xlarge w3-section">
          <a href="https://sadat-akhavi-academy.eventbrite.com" className="w3-margin-right"><i className="fa fa-calendar w3-hover-opacity"></i></a>
          <a href="https://www.youtube.com/@sadat-akhavi-academy" className="w3-margin-right"><i className="fa fa-youtube-play w3-hover-opacity"></i></a>
          <a href="https://discord.gg/2fA3ypEcHb" className="w3-margin-right"><i className="fa fa-paper-plane-o w3-hover-opacity"></i></a>
          <a href="https://x.com/Sadat_A_Academy" className="w3-margin-right"><i className="fa fa-twitter w3-hover-opacity"></i></a>
          <a href="https://www.instagram.com/sadat.akhavi.academy/" className="w3-margin-right"><i className="fa fa-instagram w3-hover-opacity"></i></a>
          <a href="https://www.facebook.com/sadat.akhavi.academy" className="w3-margin-right"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
          <a href="https://www.tiktok.com/@sadat.a.academy" className="w3-margin-right"><i className="fa fa-ticket w3-hover-opacity"></i></a>
          <a href="https://www.linkedin.com/company/sadat-akhavi-academy"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
        </div>
        <p>&copy; <span id="copyrightYear"></span> Sadat Akhavi Academy (Xigrom Pty Ltd). All rights reserved.</p>
      </footer>
    </>
  )
}
