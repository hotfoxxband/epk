document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const centerButton = document.getElementById("center-button");
  const menuIcons = document.getElementById("menu-icons");
  const navIcons = menuIcons.getElementsByClassName("nav-icon"); // Select all nav-icons
  const centerIcon = centerButton.querySelector("i");
  
  const scrollToSection = "scroll-to-section"; 
  const originalIcon = "bi-plus-circle";
  const hoverIcon = "bi-crosshair";
  
  let isHoveringNavbar = false;
  let isHoveringCenterButton = false;

  // Trigger the hover effect when the center button is hovered
  centerButton.addEventListener("mouseenter", () => {
    navbar.classList.add("hover"); // Add the hover class to the navbar
    isHoveringCenterButton = true;
    centerIcon.classList.replace(originalIcon, hoverIcon);
    
  });

  // Keep the hover effect active as long as the mouse is inside the navbar
  navbar.addEventListener("mouseenter", () => {
    if (isHoveringCenterButton) {
      navbar.classList.add("hover"); // Add the hover effect when hovering over navbar
    }
    isHoveringNavbar = true;
  });

  // Remove the hover effect when the mouse leaves the entire navbar
  navbar.addEventListener("mouseleave", () => {
    isHoveringNavbar = false;
    if (!isHoveringCenterButton) {
      navbar.classList.remove("hover"); // Remove the hover effect when leaving the navbar
      centerIcon.classList.replace(hoverIcon, originalIcon);

    }
  });

  // Also remove the hover effect when the mouse leaves the center button
  centerButton.addEventListener("mouseleave", () => {
    isHoveringCenterButton = false;
    if (!isHoveringNavbar) {
      navbar.classList.remove("hover"); // Remove the hover effect if both are not hovered
      centerIcon.classList.replace(hoverIcon, originalIcon);

    }
  });

  // Keep the menu visible while hovering over the menu icons
  menuIcons.addEventListener("mouseenter", () => {
    navbar.classList.add("hover"); // Ensure hover stays on when hovering over the menu
  });

  menuIcons.addEventListener("mouseleave", () => {
    if (!isHoveringCenterButton && !isHoveringNavbar) {
      navbar.classList.remove("hover"); // Remove hover effect if the mouse leaves both center and navbar
    }
  });


  });


// Fetch JSON file for shows information
document.addEventListener("DOMContentLoaded", function () {
  fetch("Shows/shows.json")
    .then((response) => response.json())
    .then((data) => {
      const pastContainer = document.getElementById("past-shows");
      const upcomingContainer = document.getElementById("upcoming-shows");

      const today = new Date();
      let nextShowFound = false;

      data.forEach((show) => {
        const showDate = new Date(show.date);
        
        // Create an <a> wrapper for every show
        const linkWrapper = document.createElement("a");
        linkWrapper.classList.add("show-card");
        
        if (show.link) {
          linkWrapper.href = show.link; // Use the actual link
          linkWrapper.target = "_blank"; // Open in a new tab
        } else {
          linkWrapper.href = "#shows"; // Keep the user in the section
        }

        // Add the content inside the <a> tag
        linkWrapper.innerHTML = `
          <img src="${show.image}" alt="${show.name}">
          <h4>${show.name}</h4>
          <p class="pShows">${show.place}</p>
        `;

        if (showDate < today) {
          linkWrapper.classList.add("past");
          pastContainer.appendChild(linkWrapper);
        } else {
          linkWrapper.classList.add("upcoming");
          upcomingContainer.appendChild(linkWrapper);

          if (!nextShowFound) {
            linkWrapper.classList.add("bounce");
            nextShowFound = true;
          }
        }

        setTimeout(() => linkWrapper.classList.add("visible"), 200);
      });
    })
    .catch((error) => console.error("Error loading shows:", error));
});



//////////////////////////////////////////////////////////////////////
fetch("bio") 
  .then((response) => response.text()) 
  .then((data) => {
    // Split the text into paragraphs by detecting line breaks
    const paragraphs = data.split("\n").filter(p => p.trim() !== "");

    // Convert each paragraph into a <p> tag and insert it into the page
    document.getElementById("bio-text").innerHTML = paragraphs
      .map(paragraph => `<p>${paragraph}</p>`)
      .join(''); // Joins them into a single string
  })
  .catch((error) => {
    document.getElementById("output").textContent = "Error loading bio.";
    console.error("Error fetching file:", error);
  });




//////////////////////////////////////////////////////////////////////
//Animate section elements
gsap.registerPlugin(ScrollTrigger);


gsap.to("#news-image", {
  opacity: 1,
  x: "0px",
  ease: "power1.out",
  duration: 2,
  scrollTrigger: {
    trigger: "#news",
    start: "top 60%", 
    end: "center center",
    scrub: true, // Smooth scaling effect
  }
});

  gsap.to("#bio-image", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#bio",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });
  gsap.to("#music-image", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#music",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });

  gsap.to("#shows-image", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#shows",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });

  gsap.to("#contacts-image", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#contacts",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });

  gsap.to("#image-gallery-fixed", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#image-gallery",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });

  gsap.to("#video-image", {
    opacity: 1,
    x: "0px",
    ease: "power1.out",
    duration: 2,
    scrollTrigger: {
      trigger: "#videos",
      start: "top 60%", 
      end: "center center",
      scrub: true, // Smooth scaling effect
    }
  });


  gsap.utils.toArray(".title").forEach((title) => {
    gsap.from(title, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: title, // Each element triggers its own animation
        start: "top 60%",
        end: "center 10%",
        toggleActions: "play reverse play reverse",
        scrub: true,
      },
    });
  });


//////////////////////////////////////////////////////////////////////
//Load page animation
window.addEventListener("load", function () {
  gsap.to("#preloader", { opacity: 0, duration: 0.4, ease: "power4.out", onComplete: () => {
    document.getElementById("preloader").style.display = "none";
  }});
});

//////////////////////////////////////////////////////////////////////
//Gallery control
const images = ["Images/Gallery/1.jpg", "Images/Gallery/2.jpg", "Images/Gallery/3.jpg", "Images/Gallery/4.jpg", "Images/Gallery/5.jpg"];
let index = 0;
const galleryImage = document.getElementById("galleryImage");

function adjustImageSize() {
    if (galleryImage.naturalWidth > galleryImage.naturalHeight) {
        galleryImage.style.width = "100%";
        galleryImage.style.height = "auto";
    } else {
      galleryImage.style.width = "100%";
      galleryImage.style.height = "auto";
    }
}

function changeImage(direction) {
    galleryImage.style.opacity = 0;
    
    setTimeout(() => {
        index += direction;
        if (index >= images.length) index = 0;
        if (index < 0) index = images.length - 1;
        
        galleryImage.src = images[index];
        galleryImage.onload = () => {
            galleryImage.style.opacity = 1;
            adjustImageSize();
        };
    }, 500); // Matches CSS transition duration
}

window.onload = adjustImageSize;

//////////////////////////////////////////////////////////////////////
//Fetch news for top navbar
window.onload = function () {
  fetch('ribbon.json')
    .then(response => response.json()) // Parse the JSON data
    .then(data => {
      const newsList = document.getElementById('news-list');
      const newsItems = data.news.slice(0, 3); // Limit to 3 items

      // Loop through each news item and create a news ribbon item with a link
      newsItems.forEach(news => {
        const listItem = document.createElement('div');
        listItem.classList.add('news-item');

        // Create an anchor tag for each news item
        const link = document.createElement('a');
        link.href="#news";
        link.textContent = news.title; // Set the text content of the link
        
        // Append the anchor tag to the news item
        listItem.appendChild(link);

        // Append the news item to the news list
        newsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error('Error loading news:', error);
    });
};


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const sections = document.querySelectorAll(".container-section");

 if (window.innerWidth > 800) {
  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
      snap: {
        snapTo: 1,
        duration: 0.4,
        delay: 0.0,
        ease: "power1.inOut",
      },
    });
  });
 }

  // Function to smoothly scroll to a section
  function scrollToSection(targetSection) {
    if (!targetSection) return; // Prevent errors if target is null

    gsap.to(window, {
      scrollTo: { y: targetSection },
      duration: 1.2,
      ease: "power2.inOut",
    });
  }

  // Use event delegation for dynamically added elements
  document.addEventListener("click", function (event) {
    const button = event.target.closest(".scroll-to-section"); // Check if clicked element (or parent) has the class
    if (button) {
      const targetSelector = button.getAttribute("data-target");
      const targetSection = document.querySelector(targetSelector);
      scrollToSection(targetSection);
    }
  });
});



//JSON NEWS

    document.addEventListener('DOMContentLoaded', function () {
      // Add event listeners to language selection elements
      document.querySelectorAll('.language-menu a').forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault(); // Prevent default link behavior
          const language = this.getAttribute('data-lang'); // Get the selected language
          reloadWithLanguage(language); // Call the updated function
        });
      });
    });

    function loadTranslation(jsonFile, elementId, language) {
      fetch(jsonFile)
        .then(response => response.json())
        .then(translations => {
          const translation = translations[language];
          const element = document.getElementById(elementId);
    
          if (translation) {
            if (Array.isArray(translation)) {
              // If the translation is a list of strings, append each as a paragraph
              element.innerHTML = translation
                .map(paragraph => `<p>${paragraph}</p>`)
                .join(''); // Join all paragraphs into a single string
            } else {
              // If the translation is a single string, set it as text content
              element.textContent = translation;
            }
          } else {
            console.warn(`Translation missing for ${elementId} in ${language}`);
          }
        })
        .catch(error => console.error(`Error loading ${jsonFile}:`, error));
    }

    function reloadWithLanguage(language) {
      // Save the selected language in localStorage
      localStorage.setItem('preferredLanguage', language);
    
      // Update the URL without reloading the page
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      window.history.pushState({}, '', url.toString());
    
      // Reload translations for all elements with data-translation attributes
      document.querySelectorAll('[data-translation]').forEach(element => {
        const jsonFile = element.getAttribute('data-translation');
        const elementId = element.id;
        loadTranslation(jsonFile, elementId, language);
      });
    }

    document.addEventListener("DOMContentLoaded", function () {
      const urlParams = new URLSearchParams(window.location.search);
      const selectedLanguage = urlParams.get('lang') || localStorage.getItem('preferredLanguage') || 'en'; // Default to English
    
      // Automatically load translations for elements with data-translation attributes
      document.querySelectorAll('[data-translation]').forEach(element => {
        const jsonFile = element.getAttribute('data-translation');
        const elementId = element.id;
        loadTranslation(jsonFile, elementId, selectedLanguage);
      });
    });