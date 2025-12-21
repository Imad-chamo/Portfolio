// Navigation functionality
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const menuList = document.querySelector('.menu-list');

// Toggle mobile menu
const toggleMenu = (open) => {
  if (open) {
    navbar.classList.add('show');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  } else {
    navbar.classList.remove('show');
    document.body.style.overflow = 'auto';
    menuBtn.setAttribute('aria-expanded', 'false');
  }
};

menuBtn.addEventListener('click', () => toggleMenu(true));
menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu(true);
  }
});

cancelBtn.addEventListener('click', () => toggleMenu(false));
cancelBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu(false);
  }
});

// Close menu when clicking on menu items
document.querySelectorAll('.menu-list li a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
    document.body.style.overflow = 'auto';
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Observe cards and details containers
document.querySelectorAll('.details-container, .color-container, article').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(element);
});

// Typing effect removed for performance

// Add counter animation for experience section
const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const increment = target / 200;
    let current = 0;
    
    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current);
        setTimeout(updateCounter, 10);
      } else {
        counter.textContent = target;
      }
    };
    
    updateCounter();
  });
};

// Initialize animations when page loads
window.addEventListener('load', () => {
  // Remove initial loading state
  document.body.style.opacity = '1';
  
  // Start counter animations if they exist
  animateCounters();
});

// Parallax effect removed for performance

// Add hover effect to project cards
document.querySelectorAll('.color-container').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Loading animation removed for performance

// Testimonials Carousel
const testimonialsCarousel = () => {
  const carousel = document.getElementById('testimonialsCarousel');
  const cards = carousel ? carousel.querySelectorAll('.testimonial-card') : [];
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  if (!carousel || cards.length === 0) return;
  
  let currentIndex = 0;
  let autoSlideInterval;
  const slideDuration = 6000; // 6 secondes pour une meilleure lisibilité
  let isTransitioning = false;
  
  // Initialize
  const initCarousel = () => {
    cards.forEach((card, index) => {
      if (index === 0) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    updateDots();
    updateCarouselPosition();
  };
  
  // Update carousel position
  const updateCarouselPosition = () => {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
    
    // Update active card
    cards.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
    
    setTimeout(() => {
      isTransitioning = false;
    }, 300);
  };
  
  // Update dots
  const updateDots = () => {
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };
  
  // Go to slide
  const goToSlide = (index, smooth = true) => {
    if (isTransitioning && smooth) return;
    
    if (index < 0) {
      currentIndex = cards.length - 1;
    } else if (index >= cards.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    
    updateCarouselPosition();
    updateDots();
    
    if (smooth) {
      resetAutoSlide();
    }
  };
  
  // Next slide
  const nextSlide = () => {
    goToSlide(currentIndex + 1);
  };
  
  // Previous slide
  const prevSlide = () => {
    goToSlide(currentIndex - 1);
  };
  
  // Auto slide
  const startAutoSlide = () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, slideDuration);
  };
  
  // Reset auto slide
  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    setTimeout(() => {
      startAutoSlide();
    }, 500);
  };
  
  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
    });
  }
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
  
  // Pause on hover
  const container = document.querySelector('.testimonials-carousel-container');
  if (container) {
    container.addEventListener('mouseenter', () => {
      clearInterval(autoSlideInterval);
    });
    
    container.addEventListener('mouseleave', () => {
      startAutoSlide();
    });
  }
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (container && container.getBoundingClientRect().top < window.innerHeight && 
        container.getBoundingClientRect().bottom > 0) {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    }
  });
  
  // Touch/Swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  if (carousel) {
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }
  
  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next
        nextSlide();
      } else {
        // Swipe right - previous
        prevSlide();
      }
    }
  };
  
  // Initialize
  initCarousel();
  
  // Start auto slide after a short delay
  setTimeout(() => {
    startAutoSlide();
  }, 2000);
  
  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(autoSlideInterval);
  });
  
  // Pause when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(autoSlideInterval);
    } else {
      startAutoSlide();
    }
  });
};

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', testimonialsCarousel);

// FAQ Accordion
const initFAQ = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
};

// Stats Counter Animation
const animateStats = () => {
  const stats = document.querySelectorAll('.stat-number');
  const statsSection = document.querySelector('.stats-section');
  
  if (!statsSection || stats.length === 0) return;
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;
          
          const updateCounter = () => {
            current += increment;
            if (current < target) {
              stat.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              stat.textContent = target;
            }
          };
          
          updateCounter();
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  observer.observe(statsSection);
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initFAQ();
  animateStats();
});

// Contact Form Handling - Désormais géré par contact-form.js
// Le formulaire est géré par le script contact-form.js qui utilise EmailJS
// Compatible avec GitHub Pages (pas de PHP requis)

// Ancien code (fallback si JS désactivé)
if (false) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    const budget = formData.get('budget');
    const company = formData.get('company');
    
    // Create mailto link with formatted message
    const subject = encodeURIComponent(`Nouvelle demande de projet - ${service || 'Général'}`);
    const body = encodeURIComponent(
      `Bonjour Imad,\n\n` +
      `Je souhaite discuter d'un projet avec vous.\n\n` +
      `Nom: ${name}\n` +
      `Email: ${email}\n` +
      (company ? `Entreprise: ${company}\n` : '') +
      `Type de projet: ${service || 'Non spécifié'}\n` +
      (budget ? `Budget estimé: ${budget}\n` : '') +
      `\nMessage:\n${message}\n\n` +
      `Cordialement,\n${name}`
    );
    
    // Open email client
    window.location.href = `mailto:chamkhiimad5@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
    submitBtn.style.background = 'var(--text-secondary)';
    submitBtn.disabled = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3000);
  });
}