
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
        alert("We are renovating our online store. It will be available soon.");
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