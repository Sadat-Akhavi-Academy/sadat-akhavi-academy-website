

////////////////////////////////////
/// landing page Slide show 

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let firstSlideDuration = 3500; // 3 seconds
let otherSlidesDuration = 2500; // 10 seconds
let slideTimer;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function navigateSlide(direction) {
  clearTimeout(slideTimer);
  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  startSlideshow(false);
}

function setSlide(index) {
  clearTimeout(slideTimer);
  currentIndex = index;
  startSlideshow(false);
}

function startSlideshow(auto = true) {
  showSlide(currentIndex);
  if (auto) {
    let duration = currentIndex === 0 ? firstSlideDuration : otherSlidesDuration;
    slideTimer = setTimeout(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      startSlideshow();
    }, duration);
  }
}

// Initialize the slideshow
startSlideshow();


/// landing page Slide show 
////////////////////////////////////






// Show the popup when the page loads
window.onload = function() {
    const popup = document.getElementById('video-popup');
    const close = document.querySelector('.close');
    
    // Display the popup
    popup.style.display = 'flex';

    // Close the popup when the 'X' button is clicked
    close.onclick = function() {
        popup.style.display = 'none';
        // Stop the video when the popup is closed
        document.getElementById('youtube-video').src = '';
    };

    // Optional: Stop video on background click
    popup.onclick = function(e) {
        if (e.target === popup) {
            popup.style.display = 'none';
            document.getElementById('youtube-video').src = '';
        }
    };
};


    // get year for copy right notice
    document.getElementById("copyrightYear").textContent = new Date().getFullYear();


    // Modal Image Gallery
    function onClick(element) {
        document.getElementById("img01").src = element.src;
        document.getElementById("modal01").style.display = "block";
        var captionText = document.getElementById("caption");
        captionText.innerHTML = element.alt;
    }
    
    // Change style of navbar on scroll
    window.onscroll = function() {myFunction()};
    function myFunction() {
        var navbar = document.getElementById("myNavbar");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
        } else {
            navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
        }
    }
    
    // Used to toggle the menu on small screens when clicking on the menu button
    function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    function productAvailableSoonFunction() {
        alert("This product will be available soon. Please join our Discord Server to stay tuned.");
    }

    function storeFunction() {
        // window.location.href = "https://www.amazon.com.au/stores/page/F22B0A94-0234-4492-A8BA-35A1C2E15C9E";
        // window.location.href = "https://www.ebay.com.au/usr/sadat_akhavi_academy";
        window.location.href = "http://sadatakhaviacademy.etsy.com/";
        // alert("We are renovating our online store. It will be available soon.");
    }


    // Get the button:
    let mybutton = document.getElementById("pageTopBtn");
    let mybuttonhomePageBtn = document.getElementById("homePageBtn");
    let pageTopStoreBtnPageBtn = document.getElementById("pageTopStoreBtn");
    mybuttonhomePageBtn.style.display = "block";
    pageTopStoreBtnPageBtn.style.display = "block";

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topPageFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Go back to home page.
    function go2HomePageFunction() {
        // window.history.back();
        window.location.href = "/"; // Replace with your home page URL
        // window.location.href = "https://sadat-akhavi-academy.com/"; // Replace with your home page URL

    }

    // Function to open image in new tab
    function openImage(imageSrc) {
      window.open(imageSrc, '_blank');
    }
    function showAdvancedContentPopup() {
        alert("This section is under active development, and content is coming soon! Stay tuned by joining our social media and Discord server.");
        // alert("Coming soon: Advanced level content, Stay tuned!");
    }