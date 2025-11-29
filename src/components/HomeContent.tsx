'use client'

import ClientScripts from '@/components/ClientScripts'
import { getProductsGroupedByCategories, getCategoryDisplayName, getRetiringMessage, type ProductCategory } from '@/data/products'

export default function HomeContent() {
  const groupedProducts = getProductsGroupedByCategories()
  
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
          <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onClick={() => (window as any).toggleFunction()} title="Toggle Navigation Menu">
            <i className="fa fa-bars"></i>
          </a>
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

      {/* Render products grouped by categories */}
      {categoryOrder.map((category, catIndex) => {
        const products = groupedProducts[category]
        
        // Skip empty categories
        if (products.length === 0) return null
        
        return (
          <div key={category}>
            {/* Category Header */}
            <div className="w3-container w3-padding-32">
              <h3 className="w3-center w3-xxxlarge w3-text-orange">
                {getCategoryDisplayName(category)}
              </h3>
            </div>

            {/* Products in this category */}
            {products.reduce<JSX.Element[]>((acc, product, index) => {
              // Group products in pairs
              if (index % 2 === 0) {
                const nextProduct = products[index + 1]
                const retiringMessage = getRetiringMessage(product.productCode)
                const nextRetiringMessage = nextProduct ? getRetiringMessage(nextProduct.productCode) : null
                
                acc.push(
                  <div key={product.productCode} className="w3-row w3-container" style={{margin: '50px 0'}}>
                    <div className="w3-half w3-container">
                      <div className={`w3-topbar ${index % 4 === 0 ? 'w3-border-orange' : 'w3-border-amber'}`}>
                        <a href={`/pages/${product.slug}`} className="image-link">
                          <img src={product.mainImage} style={{width: '100%'}} alt={product.title} />
                        </a>
                        <h2>{product.title}</h2>
                        {retiringMessage && <p><b>{retiringMessage}</b></p>}
                        <p>{product.homeSummary}</p>
                      </div>
                    </div>

                    {nextProduct ? (
                      <div className="w3-half w3-container">
                        <div className={`w3-topbar ${index % 4 === 0 ? 'w3-border-amber' : 'w3-border-orange'}`}>
                          <a href={`/pages/${nextProduct.slug}`} className="image-link">
                            <img src={nextProduct.mainImage} style={{width: '100%'}} alt={nextProduct.title} />
                          </a>
                          <h2>{nextProduct.title}</h2>
                          {nextRetiringMessage && <p><b>{nextRetiringMessage}</b></p>}
                          <p>{nextProduct.homeSummary}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="w3-half w3-container">
                        {/* Empty space for odd number of products */}
                      </div>
                    )}
                  </div>
                )
              }
              return acc
            }, [])}

            {/* Show "Coming Soon" placeholders for New Arrivals category */}
            {category === 'new-arrivals' && (
              <div className="w3-row w3-container" style={{margin: '50px 0'}}>
                <div className="w3-half w3-container">
                  <div className="w3-topbar w3-border-orange">
                    <div className="filter-blur">
                      <img src="/images/3d-791205_640_pixabay.jpg" style={{width: '100%'}} alt="New Arrivals Coming Soon" />
                    </div>
                    <h2>New Arrivals</h2>
                    <p>New printing in progress! We are committed to bringing you new, exciting products. If you are interested in being notified as soon as a product is released, join our social media platforms (Instagram, Discord server, YouTube) to stay updated on our latest releases.</p>
                  </div>
                </div>

              </div>
            )}
          </div>
        )
      })}

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
