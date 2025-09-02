document.addEventListener('DOMContentLoaded', function() {
    // Initialize the projects page
    initializeProjectsPage();
});

function initializeProjectsPage() {
    // Initialize filter functionality
    initializeFilters();
    
    // Initialize project interactions
    initializeProjectInteractions();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations on scroll
    initializeScrollAnimations();
    
    // Initialize back button functionality
    initializeBackButton();
}

// Filter functionality
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects with animation
            filterProjects(filter, projectCards);
        });
    });
}

function filterProjects(filter, projectCards) {
    projectCards.forEach((card, index) => {
        const cardCategory = card.getAttribute('data-category');
        
        // Add delay for staggered animation
        setTimeout(() => {
            if (filter === 'all' || cardCategory === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }, index * 100);
    });
}

// Project interactions
function initializeProjectInteractions() {
    // Initialize show more buttons
    initializeShowMoreButtons();
    
    // Initialize project card hover effects
    initializeCardHoverEffects();
    
    // Initialize action button interactions
    initializeActionButtons();
}

function initializeShowMoreButtons() {
    const showMoreButtons = document.querySelectorAll('.show-more-btn');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectCard = this.closest('.project-card');
            const projectDetails = projectCard.querySelector('.project-details');
            const isExpanded = projectDetails.style.display === 'block';
            
            if (isExpanded) {
                // Collapse details
                projectDetails.style.display = 'none';
                this.innerHTML = '<i class="fas fa-plus"></i> Show More';
                this.classList.remove('expanded');
            } else {
                // Expand details
                projectDetails.style.display = 'block';
                this.innerHTML = '<i class="fas fa-minus"></i> Show Less';
                this.classList.add('expanded');
                
                // Smooth scroll to show the expanded content
                setTimeout(() => {
                    projectDetails.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 300);
            }
        });
    });
}

function initializeCardHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Mouse enter effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
        });
        
        // Mouse leave effect
        card.addEventListener('mouseleave', function() {
            // Only reset if not expanded
                const showMoreBtn = this.querySelector('.btn-secondary');
            if (!showMoreBtn.classList.contains('expanded')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            }
        });
    });
}

function initializeActionButtons() {
    // Add click animations to buttons
    const actionButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .filter-btn');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
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
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Smooth scrolling functionality
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add CSS for animation
    if (!document.querySelector('#scroll-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'scroll-animation-styles';
        style.textContent = `
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Back button functionality
function initializeBackButton() {
    const backButton = document.querySelector('.btn-back');
    
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Navigate back with a smooth transition
            setTimeout(() => {
                window.location.href = this.getAttribute('href');
            }, 200);
        });
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Advanced interactions
function initializeAdvancedInteractions() {
    // Keyboard navigation support
    initializeKeyboardNavigation();
    
    // Touch gesture support for mobile
    initializeTouchGestures();
    
    // Loading states for external links
    initializeLoadingStates();
}

function initializeKeyboardNavigation() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    document.addEventListener('keydown', function(e) {
        // Tab navigation enhancement
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
        
        // Arrow key navigation for filters
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeFilter = document.querySelector('.filter-btn.active');
            const currentIndex = Array.from(filterButtons).indexOf(activeFilter);
            let newIndex;
            
            if (e.key === 'ArrowLeft') {
                newIndex = currentIndex > 0 ? currentIndex - 1 : filterButtons.length - 1;
            } else {
                newIndex = currentIndex < filterButtons.length - 1 ? currentIndex + 1 : 0;
            }
            
            filterButtons[newIndex].click();
            filterButtons[newIndex].focus();
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

function initializeTouchGestures() {
    if ('ontouchstart' in window) {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            let touchStartY = 0;
            let touchEndY = 0;
            
            card.addEventListener('touchstart', function(e) {
                touchStartY = e.changedTouches[0].screenY;
            });
            
            card.addEventListener('touchend', function(e) {
                touchEndY = e.changedTouches[0].screenY;
                
                // Swipe up to expand, swipe down to collapse
                const swipeDistance = touchStartY - touchEndY;
                    const showMoreBtn = this.querySelector('.btn-secondary');
                
                if (Math.abs(swipeDistance) > 50) {
                    if (swipeDistance > 0 && !showMoreBtn.classList.contains('expanded')) {
                        // Swipe up - expand
                        showMoreBtn.click();
                    } else if (swipeDistance < 0 && showMoreBtn.classList.contains('expanded')) {
                        // Swipe down - collapse
                        showMoreBtn.click();
                    }
                }
            });
        });
    }
}

function initializeLoadingStates() {
    const externalLinks = document.querySelectorAll('a[href^="http"], a[href^="https"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function() {
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            // Add loading spinner
            const originalContent = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            // Reset after a delay (in case the link doesn't navigate away)
            setTimeout(() => {
                this.innerHTML = originalContent;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 3000);
        });
    });
}

// Performance optimization
function optimizePerformance() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Debounce scroll events
    const debouncedScrollHandler = debounce(() => {
        // Handle scroll-based animations
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, 10);
    
    window.addEventListener('scroll', debouncedScrollHandler);
}

// Error handling
function initializeErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('Projects page error:', e.error);
        
        // Show user-friendly error message if needed
        const errorMessage = document.createElement('div');
        errorMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #dc2626;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            z-index: 9999;
            max-width: 300px;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        errorMessage.textContent = 'An error occurred. Please refresh the page.';
        
        document.body.appendChild(errorMessage);
        
        setTimeout(() => {
            errorMessage.style.opacity = '1';
        }, 100);
        
        setTimeout(() => {
            errorMessage.style.opacity = '0';
            setTimeout(() => {
                errorMessage.remove();
            }, 300);
        }, 5000);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    initializeProjectsPage();
    
    // Advanced features
    initializeAdvancedInteractions();
    
    // Performance optimization
    optimizePerformance();
    
    // Error handling
    initializeErrorHandling();
    
    console.log('Projects page initialized successfully');
});
