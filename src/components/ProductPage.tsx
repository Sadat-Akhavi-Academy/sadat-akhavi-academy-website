'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { getProductByCode } from '@/data/products'

interface ProductPageProps {
  title: string
  slug: string
  productCode: string
  mainImage: string
  description: string[]
  introVideoId: string
  assemblyVideoId?: string
  guideDocUrl?: string
  printingDocUrl?: string
  troubleshootingVideoId?: string
  deepDiveVideoId?: string
  softwareUrl?: string
  gallery: string[]
  skills: Array<{ icon: string; name: string }>
  relatedProductCodes?: string[]
  metadata: {
    ogImage: string
    keywords: string
  }
}

export default function ProductPage({ 
  title, 
  slug,
  productCode,
  mainImage, 
  description, 
  introVideoId,
  assemblyVideoId,
  guideDocUrl,
  printingDocUrl,
  troubleshootingVideoId,
  deepDiveVideoId,
  softwareUrl,
  gallery,
  skills,
  relatedProductCodes,
  metadata 
}: ProductPageProps) {
  // Resolve related product codes to full product data
  const relatedKits = relatedProductCodes?.map(code => getProductByCode(code)).filter(Boolean) as Array<{ title: string; slug: string; productCode: string }> | undefined
  
  useEffect(() => {
    const copyrightYearElement = document.getElementById("copyrightYear")
    if (copyrightYearElement) {
      copyrightYearElement.textContent = new Date().getFullYear().toString()
    }

    const handleScroll = () => {
      const mybutton = document.getElementById("pageTopBtn")
      const homebtn = document.getElementById("homePageBtn")
      const storebtn = document.getElementById("pageTopStoreBtn")
      
      if (mybutton && homebtn && storebtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block"
        } else {
          mybutton.style.display = "none"
        }
        homebtn.style.display = "block"
        storebtn.style.display = "block"
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <button onClick={() => (window as any).go2HomePageFunction()} id="homePageBtn" title="Go to Home">Home Page</button>
      <button onClick={() => (window as any).topPageFunction()} id="pageTopBtn" title="Go to top">Top</button>
      <button onClick={() => (window as any).storeFunction()} id="pageTopStoreBtn" title="Go to e-Store">e-Store</button>

      <div className="w3-content w3-margin-top" style={{maxWidth: '2000px'}}>
        <div className="w3-row-padding">
          
          {/* Left Column */}
          <div className="w3-third" id="home">
            <div className="w3-white w3-text-black w3-card-4">
              <div className="w3-display-container">
                <img src={mainImage} style={{width: '100%'}} alt={title} />
                <div className="w3-display-bottomleft w3-container w3-text-white">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="w3-container">
                {introVideoId && (
                  <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-large w3-text-red"></i>
                    <a href={`https://www.youtube.com/watch?v=${introVideoId}`}>Introduction (Video)</a>
                  </p>
                )}
                {assemblyVideoId && (
                  <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-large w3-text-red"></i>
                    <a href={`https://www.youtube.com/watch?v=${assemblyVideoId}`}>Assembly Guide (Video)</a>
                  </p>
                )}
                {guideDocUrl && (
                  <p><i className="fa fa-book fa-fw w3-margin-right w3-large w3-text-black"></i>
                    <a href={guideDocUrl}>Complete Guide (Document)</a>
                  </p>
                )}
                {printingDocUrl && (
                  <p><i className="fa fa-book fa-fw w3-margin-right w3-large w3-text-black"></i>
                    <a href={printingDocUrl}>3D Printing Asset Sheet (Document)</a>
                  </p>
                )}
                {troubleshootingVideoId && (
                  <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-large w3-text-red"></i>
                    <a href="#" onClick={() => (window as any).showAdvancedContentPopup()}>Troubleshooting (Video)</a>
                  </p>
                )}
                {deepDiveVideoId && (
                  <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-large w3-text-red"></i>
                    <a href="#" onClick={() => (window as any).showAdvancedContentPopup()}>Deep Dive Training (Video)</a>
                  </p>
                )}
                {softwareUrl && (
                  <p><i className="fa fa-git fa-fw w3-margin-right w3-large w3-text-black"></i>
                    <a href={softwareUrl}>Software/Firmware</a>
                  </p>
                )}
                <p><i className="fa fa-paper-plane-o fa-fw w3-margin-right w3-large w3-text-blank"></i>
                  <a href="https://discord.gg/2fA3ypEcHb">Social - Discord Server</a>
                </p>
                <p><i className="fa fa-instagram fa-fw w3-margin-right w3-large w3-text-blank"></i>
                  <a href="https://www.instagram.com/sadat.akhavi.academy/">Social - Instagram</a>
                </p>
                <hr />
                
                <p className="w3-large"><b><i className="fa fa-wpexplorer fa-fw w3-margin-right w3-text-black"></i>Developed Skills</b></p>
                <div className="w3-row-padding w3-center">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="w3-col m3">
                      <img src={skill.icon} style={{height: '45px', width: '45px'}} alt={skill.name} />
                      <p className="w3-tiny">{skill.name}</p>
                    </div>
                  ))}
                </div>
                <hr />
                <p className="w3-large"><b><i className="fa fa-info-circle fa-fw w3-margin-right w3-text-black"></i>Information</b></p>
                <p><i className="fa fa-users fa-fw w3-margin-right w3-medium w3-text-black"></i>Adult supervision advised</p>
                <hr />
                <p className="w3-large"><b><i className="fa fa-share-square fa-fw w3-margin-right w3-text-black"></i>Socials</b></p>
                <p><i className="fa fa-calendar fa-fw w3-margin-right w3-medium w3-text-green"></i>
                  <a href="https://sadat-akhavi-academy.eventbrite.com">EventBrite</a>
                </p>
                <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-medium w3-text-red"></i>
                  <a href="https://www.youtube.com/@sadat-akhavi-academy">Youtube</a>
                </p>
                <p><i className="fa fa-paper-plane-o fa-fw w3-margin-right w3-large w3-text-blank"></i>
                  <a href="https://discord.gg/2fA3ypEcHb">Discord</a>
                </p>
                <p><i className="fa fa-twitter fa-fw w3-margin-right w3-large w3-text-blue"></i>
                  <a href="https://x.com/Sadat_A_Academy">X</a>
                </p>
                <p><i className="fa fa-facebook-official fa-fw w3-margin-right w3-large w3-text-blue"></i>
                  <a href="https://www.facebook.com/sadat.akhavi.academy">Facebook</a>
                </p>
                <p><i className="fa fa-instagram fa-fw w3-margin-right w3-large w3-text-red"></i>
                  <a href="https://www.instagram.com/sadat.akhavi.academy/">Instagram</a>
                </p>
                <p><i className="fa fa-linkedin fa-fw w3-margin-right w3-large w3-text-blue"></i>
                  <a href="https://www.linkedin.com/company/sadat-akhavi-academy">LinkedIn</a>
                </p>
                <hr />
                <p className="w3-large"><b><i className="fa fa-medkit fa-fw w3-margin-right w3-text-black"></i>Helpful Resources</b></p>
                <p><i className="fa fa-shopping-bag fa-fw w3-margin-right w3-medium w3-text-green"></i>
                  <a onClick={() => (window as any).storeFunction()}>e-Store</a>
                </p>
                <p><i className="fa fa-youtube-play fa-fw w3-margin-right w3-medium w3-text-red"></i>
                  <a href="https://youtu.be/jPeuWVC7mlw">3D Printer Guide</a>
                </p>
                {relatedKits && relatedKits.length > 0 && (
                  <>
                    <hr />
                    <p className="w3-large"><b><i className="fa fa-link fa-fw w3-margin-right w3-text-black"></i>Related Kits</b></p>
                    {relatedKits.map((kit, idx) => (
                      <p key={idx}><i className="fa fa-caret-right fa-fw w3-margin-right w3-medium w3-text-black"></i>
                        <Link href={`/products/${kit.slug}`}>{kit.title}</Link>
                      </p>
                    ))}
                  </>
                )}
              </div>
            </div>
            <br />
          </div>

          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-black w3-padding-16">
                <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>{title}
              </h2>
              <div className="w3-container">
                {description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
                <br /><br /><br />
              </div>
            </div>

            <div className="w3-card w3-white w3-margin-bottom">
              <div className="bgimg-2 w3-display-container w3-opacity-min">
                <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}}>
                  <button className="w3-button w3-padding-large w3-orange" style={{marginTop: '64px'}} onClick={() => (window as any).storeFunction()}>
                    VISIT OUR e-STORE
                  </button>
                </div>
              </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-black w3-padding-16">
                <i className="fa fa-video-camera fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>Videos
              </h2>
              <div className="w3-container">
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/qB5FXVPfYr4?si=4ShPdq1L3zH6Q976`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <hr />
                {introVideoId && (
                  <>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${introVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <hr />
                  </>
                )}
                {assemblyVideoId && (
                  <>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${assemblyVideoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    <hr />
                  </>
                )}
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jPeuWVC7mlw?si=OPGayPzKuBrseDM1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>

            <div className="w3-card w3-white w3-margin-bottom">
              <div className="bgimg-2 w3-display-container w3-opacity-min">
                <div className="w3-display-middle" style={{whiteSpace: 'nowrap'}}>
                  <button className="w3-button w3-padding-large w3-orange" style={{marginTop: '64px'}} onClick={() => (window as any).storeFunction()}>
                    VISIT OUR e-STORE
                  </button>
                </div>
              </div>
            </div>

            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-black w3-padding-16">
                <i className="fa fa-picture-o fa-fw w3-margin-right w3-xxlarge w3-text-black"></i>Gallery
              </h2>
              <div className="w3-content w3-container w3-padding-64" id="portfolio">
                <div className="w3-row-padding w3-center">
                  {gallery.slice(0, 4).map((img, idx) => (
                    <div key={idx} className="w3-col m3">
                      <img src={img} style={{width: '100%'}} onClick={() => (window as any).openImage(img)} className="w3-hover-opacity" alt={`${title} gallery ${idx + 1}`} />
                    </div>
                  ))}
                </div>
                {gallery.length > 4 && (
                  <div className="w3-row-padding w3-center w3-section">
                    {gallery.slice(4, 8).map((img, idx) => (
                      <div key={idx + 4} className="w3-col m3">
                        <img src={img} style={{width: '100%'}} onClick={() => (window as any).openImage(img)} className="w3-hover-opacity" alt={`${title} gallery ${idx + 5}`} />
                      </div>
                    ))}
                  </div>
                )}
                {gallery.length > 8 && (
                  <div className="w3-row-padding w3-center w3-section">
                    {gallery.slice(8, 12).map((img, idx) => (
                      <div key={idx + 8} className="w3-col m3">
                        <img src={img} style={{width: '100%'}} onClick={() => (window as any).openImage(img)} className="w3-hover-opacity" alt={`${title} gallery ${idx + 9}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
        <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"></i>To the top</a>
        <div className="w3-xlarge w3-section">
          <a href="https://sadat-akhavi-academy.eventbrite.com" className="w3-margin-right"><i className="fa fa-calendar w3-hover-opacity"></i></a>
          <a href="https://www.youtube.com/@sadat-akhavi-academy" className="w3-margin-right"><i className="fa fa-youtube-play w3-hover-opacity"></i></a>
          <a href="https://discord.gg/2fA3ypEcHb" className="w3-margin-right"><i className="fa fa-paper-plane-o w3-hover-opacity"></i></a>
          <a href="https://x.com/Sadat_A_Academy" className="w3-margin-right"><i className="fa fa-twitter w3-hover-opacity"></i></a>
          <a href="https://www.facebook.com/sadat.akhavi.academy" className="w3-margin-right"><i className="fa fa-facebook-official w3-hover-opacity"></i></a>
          <a href="https://www.instagram.com/sadat.akhavi.academy/" className="w3-margin-right"><i className="fa fa-instagram w3-hover-opacity"></i></a>
          <a href="https://www.tiktok.com/@sadat.a.academy" className="w3-margin-right"><i className="fa fa-ticket w3-hover-opacity"></i></a>
          <a href="https://www.linkedin.com/company/sadat-akhavi-academy"><i className="fa fa-linkedin w3-hover-opacity"></i></a>
        </div>
        <p>&copy; <span id="copyrightYear"></span> Sadat Akhavi Academy (Xigrom Pty Ltd). All rights reserved.</p>
      </footer>
    </>
  )
}
