//----------HOME PAGE----------
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all product cards and deal cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card-home, .deal-card-home');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
});

// Deal card hover effect
document.querySelectorAll('.deal-card-home').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

//----------PRODUCT PAGE----------
let products = {
  data: [
    {
      productName: "Headphone Nirkabel Noise Cancellation V1",
      category: "Headphones",
      price: "1,999,000",
      image: "../asset/Headphone 1.png",
      rating: 5
    },
    {
      productName: "Headphone Studio Monitor",
      category: "Headphones",
      price: "4,559,000",
      image: "../asset/Headphone studio monitor.png",
      rating: 4
    },
    {
      productName: "Headphone Nirkabel Noise Cancellation V2",
      category: "Headphones",
      price: "5,000,000",
      image: "../asset/Headphone Nirkabel Noise Cancellation V2.png",
      rating: 5
    },
    {
      productName: "Earbuds Noise Cancellation V1",
      category: "Earbuds",
      price: "1,999,000",
      image: "../asset/earbuds nc v1.png",
      rating: 4
    },
    {
      productName: "Earbuds Noise Cancellation V2",
      category: "Earbuds",
      price: "4,000,000",
      image: "../asset/Headphone Nirkabel Noise Cancellation V2.png",
      rating: 5
    },
    {
      productName: "Gaming Earbuds",
      category: "Earbuds",
      price: "500,000",
      image: "../asset/Gaming earbuds.png",
      rating: 5
    },
    {
      productName: "Speaker Wireless Portable",
      category: "Speakers",
      price: "1,800,000",
      image: "../asset/Speaker Wireless Portable.png",
      rating: 4
    },
    {
      productName: "Party Speaker",
      category: "Speakers",
      price: "6,000,000",
      image: "../asset/Party Speaker.png",
      rating: 4
    },
    {
      productName: "Headphone Gaming",
      category: "Headphones",
      price: "2,300,000",
      image: "../asset/Headphone gaming.png",
      rating: 5
    },
    {
      productName: "Open Earbuds Classic",
      category: "Open-ear-earbuds",
      price: "1,300,000",
      image: "../asset/Open Earbuds Classic.png",
      rating: 5
    },
    {
      productName: "Open-Ear Clip Earbuds",
      category: "Open-ear-earbuds",
      price: "1,400,000",
      image: "../asset/Open-Ear Clip Earbuds.png",
      rating: 5
    },
    {
      productName: "Speaker Max",
      category: "Speakers",
      price: "3,100,000",
      image: "../asset/Speaker Max.png",
      rating: 5
    },
  ],
};

function createProductCards() {
  let productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";
  
  for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    //category and 
    card.classList.add("card", i.category);
    
    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    // Img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    
    // Container
    let container = document.createElement("div");
    container.classList.add("container");
    
    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName;
    container.appendChild(name);
    
    // Rating
    let rating = document.createElement("div");
    rating.classList.add("rating");
    rating.innerHTML = "★".repeat(i.rating) + "☆".repeat(5 - i.rating);
    container.appendChild(rating);
    
    // Price
    let price = document.createElement("h6");
    price.innerText = "Rp " + i.price;
    price.style.color = "#ff0000"; // Make price red
    container.appendChild(price);
    
    card.appendChild(container);
    productsContainer.appendChild(card);
  }
}

// Filter product based on category
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // Check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  
  // Select all cards
  let elements = document.querySelectorAll(".card");
  // Loop through all cards
  elements.forEach((element) => {
    // Display all cards on 'all' button click
    if (value.toLowerCase() == "all") {
      element.classList.remove("hide");
    } else {
      // Check if element contains category class
      if (element.classList.contains(value)) {
        // Display element based on category
        element.classList.remove("hide");
      } else {
        // Hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search functionality
document.getElementById("search").addEventListener("click", () => {
  performSearch();
});

document.getElementById("search-input").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

// Search function
function performSearch() {
  // Get search input value
  let searchInput = document.getElementById("search-input").value.toUpperCase();
  
  // Select all cards
  let cards = document.querySelectorAll(".card");
  let productNames = document.querySelectorAll(".product-name");
  
  productNames.forEach((name, index) => {
    if (name.innerText.toUpperCase().includes(searchInput)) {
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
  
  // Reset category buttons active state
  document.querySelectorAll(".button-value").forEach(btn => {
    btn.classList.remove("active");
  });
}

// Initially display all products and activate "All" button
window.onload = () => {
  createProductCards();
  filterProduct("all");
  document.querySelector(".button-value[onclick=\"filterProduct('all')\"]").classList.add("active");
};



//ABOUT PAGE
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    animateHeroText();
    initScrollAnimations();
    initParallax();
    animateValueCards();
    
    // Add scroll event listener for reveal animations
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load to reveal elements already in viewport
    animateOnScroll();
    
    // Set active nav link
    setActiveNavLink();
});

// Function to set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'about.html' || 
            (currentPage.includes('about') && link.getAttribute('href') === 'about.html')) {
            link.classList.add('active');
        }
    });
}

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Function to add animation classes when elements enter viewport
function animateOnScroll() {
    // Reveal text elements
    document.querySelectorAll('.reveal-text').forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('active');
        }
    });
    
    // Reveal left elements
    document.querySelectorAll('.reveal-left').forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('active');
        }
    });
    
    // Reveal right elements
    document.querySelectorAll('.reveal-right').forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('active');
        }
    });
    
    // Reveal up elements
    document.querySelectorAll('.reveal-up').forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('active');
        }
    });
    
    // Reveal fade elements
    document.querySelectorAll('.reveal-fade').forEach(elem => {
        if (isInViewport(elem)) {
            elem.classList.add('active');
        }
    });
}

// Text animation for hero section
function animateHeroText() {
    const heroTitle = document.querySelector('.about-hero h1');
    const heroText = document.querySelector('.about-hero p');
    
    if (heroTitle && heroText) {
        gsap.from(heroTitle, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
        
        gsap.from(heroText, {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: "power3.out"
        });
    }
}

// Initialize all scroll-based animations with GSAP
function initScrollAnimations() {
    // History image animation
    gsap.from('.history-image img', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.history-section',
            start: "top 70%"
        }
    });
    
    // History content animation
    gsap.from('.history-content', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.history-section',
            start: "top 70%"
        }
    });
    
    // Mission content animation
    gsap.from('.mission-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.mission-section',
            start: "top 70%"
        }
    });
    
    // Values title animation
    gsap.from('.values-title', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.values-section',
            start: "top 80%"
        }
    });
}

// Parallax effect for mission section
function initParallax() {
    gsap.to('.mission-section', {
        backgroundPosition: `50% ${window.innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
            trigger: '.mission-section',
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
}

// Animate value cards with staggered effect
function animateValueCards() {
    gsap.from('.value-card', {
        duration: 0.8,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.values-container',
            start: "top 80%"
        }
    });
}

// Add pulse animation to headphone wireframe
function pulsateEffect() {
    const pulseElement = document.querySelector('.pulse-animation');
    if (pulseElement) {
        gsap.to(pulseElement, {
            boxShadow: '0 0 30px rgba(167, 120, 243, 0.8)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// ---------- DEALS PAGE -----------
// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.membership-card, .promotion-item, .discount-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// Add floating particles
function createFloatingParticles() {
    const particleCount = 20;
    const body = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(139, 92, 246, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            animation: float ${5 + Math.random() * 10}s infinite linear;
        `;
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        body.appendChild(particle);
    }
}

// Card interaction effects
function addCardEffects() {
    const cards = document.querySelectorAll('.membership-card, .discount-card, .promotion-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        card.addEventListener('click', function() {
            this.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
        });
    });
}

// CTA button effect
function addCTAEffect() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.4);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
}

// Initialize all effects
window.addEventListener('load', function() {
    createFloatingParticles();
    addCardEffects();
    addCTAEffect();
    animateOnScroll();
});

window.addEventListener('scroll', function() {
    animateOnScroll();
});

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

