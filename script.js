document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      const icon = mobileMenuToggle.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }

  // Learn More Button - Navigate to About Page
  const learnMoreBtn = document.querySelector(".learn-more-btn")
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", (e) => {
      e.preventDefault()
      // Navigate to about.html page
      window.location.href = "about.html"
    })
  }

  // CTA Button - Start Exploring (scroll to blog section)
  const ctaButton = document.querySelector(".cta-button")
  if (ctaButton) {
    ctaButton.addEventListener("click", (e) => {
      e.preventDefault()
      const blogSection = document.querySelector("#blog")
      if (blogSection) {
        blogSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  }

  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }

      // Close mobile menu if open
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active")
        const icon = mobileMenuToggle.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  })

  // Like Button Functionality
  const likeButtons = document.querySelectorAll(".like-btn")
  likeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent card click event
      const icon = button.querySelector("i")

      if (button.classList.contains("liked")) {
        button.classList.remove("liked")
        icon.classList.remove("fas", "fa-heart")
        icon.classList.add("far", "fa-heart")
      } else {
        button.classList.add("liked")
        icon.classList.remove("far", "fa-heart")
        icon.classList.add("fas", "fa-heart")

        // Add a small animation
        button.style.transform = "scale(1.2)"
        setTimeout(() => {
          button.style.transform = "scale(1)"
        }, 150)
      }
    })
  })

  // Post Card Click Navigation
  const postCards = document.querySelectorAll(".post-card:not(.gallery-card)")
  postCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Don't navigate if clicking on like button
      if (e.target.closest(".like-btn")) {
        return
      }

      const cardTitle = card.querySelector(".post-title").textContent
      let targetPage = ""

      // Determine target page based on card title
      if (cardTitle.includes("DAY 01")) {
        targetPage = "day-01.html"
      } else if (cardTitle.includes("DAY 02")) {
        targetPage = "day-02.html"
      } else if (cardTitle.includes("DAY 03")) {
        targetPage = "day-03.html"
      } else if (cardTitle.includes("DAY 04")) {
        targetPage = "day-04.html"
      } else if (cardTitle.includes("DAY 05")) {
        targetPage = "day-05.html"
      }

      if (targetPage) {
        window.location.href = targetPage
      }
    })
  })

  // Gallery Card Click Navigation
  const galleryCard = document.querySelector(".gallery-card")
  if (galleryCard) {
    galleryCard.addEventListener("click", () => {
      window.location.href = "gallery.html"
    })
  }

  // Gallery Button Click Navigation
  const galleryBtn = document.querySelector(".gallery-btn")
  if (galleryBtn) {
    galleryBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      window.location.href = "gallery.html"
    })
  }

  // Read More Button Click Navigation
  const readMoreButtons = document.querySelectorAll(".read-more-btn")
  readMoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent card click event

      const card = button.closest(".post-card")
      const cardTitle = card.querySelector(".post-title").textContent
      let targetPage = ""

      // Determine target page based on card title
      if (cardTitle.includes("DAY 01")) {
        targetPage = "day-01.html"
      } else if (cardTitle.includes("DAY 02")) {
        targetPage = "day-02.html"
      } else if (cardTitle.includes("DAY 03")) {
        targetPage = "day-03.html"
      } else if (cardTitle.includes("DAY 04")) {
        targetPage = "day-04.html"
      } else if (cardTitle.includes("DAY 05")) {
        targetPage = "day-05.html"
      }

      if (targetPage) {
        window.location.href = targetPage
      }
    })
  })

  // Scroll Animation for Elements
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for scroll animation
  const animateElements = document.querySelectorAll(".post-card, .content-section, .gallery-item")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Header Background Change on Scroll
  const header = document.querySelector(".header")
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.style.background = "rgba(45, 90, 61, 0.95)"
        header.style.backdropFilter = "blur(10px)"
      } else {
        header.style.background = "#2d5a3d"
        header.style.backdropFilter = "none"
      }
    })
  }

  // Social Links Click Handler
  const socialLinks = document.querySelectorAll(".social-link")
  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const icon = link.querySelector("i")

      // Add click animation
      link.style.transform = "scale(1.2)"
      setTimeout(() => {
        link.style.transform = "scale(1)"
      }, 150)

      // You can add actual social media links here
      console.log("Social link clicked:", icon.className)
    })
  })

  // Back Button Functionality
  const backBtn = document.querySelector(".back-btn")
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "index.html"
    })
  }

  // Image Loading Animation
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", () => {
      img.style.opacity = "1"
    })

    // Set initial opacity for loading effect
    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })

  // Keyboard Navigation Support
  document.addEventListener("keydown", (e) => {
    // ESC key to close mobile menu
    if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      const icon = mobileMenuToggle.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })

  console.log("Industrial Blog website initialized successfully!")
})

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Export functions for potential use in other scripts
window.BlogUtils = {
  debounce,
  throttle,
}

