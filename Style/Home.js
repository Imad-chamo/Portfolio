// Navigation functionality
const navbar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const menuList = document.querySelector('.menu-list');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
  navbar.classList.add('show');
  document.body.style.overflow = 'hidden';
});

cancelBtn.addEventListener('click', () => {
  navbar.classList.remove('show');
  document.body.style.overflow = 'auto';
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

// Add typing effect to title
const title = document.querySelector('.section__text .title');
if (title) {
  const text = title.textContent;
  title.textContent = '';
  let i = 0;
  
  const typeWriter = () => {
    if (i < text.length) {
      title.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing effect after a short delay
  setTimeout(typeWriter, 1000);
}

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

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector('.banner');
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.backgroundPosition = `center ${speed}px`;
  }
});

// Add hover effect to project cards
document.querySelectorAll('.color-container').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
  // Create loading overlay
  const loadingOverlay = document.createElement('div');
  loadingOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #dc2626, #f8fafc);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  `;
  
  const loader = document.createElement('div');
  loader.style.cssText = `
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  // Add spin animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
  
  loadingOverlay.appendChild(loader);
  document.body.appendChild(loadingOverlay);
  
  // Remove loading overlay after page loads
  window.addEventListener('load', () => {
    setTimeout(() => {
      loadingOverlay.style.opacity = '0';
      setTimeout(() => {
        loadingOverlay.remove();
      }, 500);
    }, 1000);
  });
});
