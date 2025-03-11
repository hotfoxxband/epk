document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  const centerButton = document.getElementById("center-button");
  const menuIcons = document.getElementById("menu-icons");
  const navIcons = menuIcons.getElementsByClassName("nav-icon"); // Select all nav-icons
  const centerIcon = centerButton.querySelector("i");
  
  const scrollToSection = "scroll-to-section"; 
  const originalIcon = "bi-plus-circle";
  const hoverIcon = "bi-house";
  
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





//////////////////////////////////////////////////////////////////////
//Fetch json file for shows information
document.addEventListener("DOMContentLoaded", function () {
  fetch("shows.json")
    .then((response) => response.json())
    .then((data) => {
      const pastContainer = document.getElementById("past-shows");
      const upcomingContainer = document.getElementById("upcoming-shows");

      const today = new Date();

      let nextShowFound = false;

      data.forEach((show) => {
        const showDate = new Date(show.date);
        const showCard = document.createElement("div");
        showCard.classList.add("show-card");

        showCard.innerHTML = `
                    <img src="${show.image}" alt="${show.name}">
                    <h4>${show.name}</h4>
                    <p class="pShows">${show.place}</p >
                    
                `;

        if (showDate < today) {
          showCard.classList.add("past");
          pastContainer.appendChild(showCard);
        } else {
          showCard.classList.add("upcoming");
          upcomingContainer.appendChild(showCard);

          if (!nextShowFound) {
            showCard.classList.add("bounce");
            nextShowFound = true;
          }
        }

        setTimeout(() => showCard.classList.add("visible"), 200);
      });
    })
    .catch((error) => console.error("Error loading shows:", error));
});

//////////////////////////////////////////////////////////////////////
//Fetch bio content
fetch("bio") 
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("bio-text").textContent = data;
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
        galleryImage.style.width = "auto";
        galleryImage.style.height = "100%";
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
  fetch('news.json')
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
        link.target = '_blank'; // Ensure the link opens in a new tab
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

fetch('news.json') // Fetch JSON file
    .then(response => response.json()) // Parse JSON
    .then(data => {
        if (data.news && data.news.length > 0) {
            const latestNews = data.news[0];

            // Insert title and date
            document.getElementById("news-text-title").textContent = latestNews.titlenews;

            // Convert message array into paragraphs dynamically
            document.getElementById("news-text-content").innerHTML = latestNews.message
                .map(paragraph => `<p>${paragraph}</p>`)
                .join(''); // Joins them into one string
        } else {
            console.error("No news found in JSON.");
        }
    })
    .catch(error => console.error('Error loading JSON:', error));
  


  
  
  
