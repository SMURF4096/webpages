// ========================================
// SS INTEGRATION - Interactive JavaScript
// Modern scroll animations and effects
// ========================================

(function() {
    'use strict';

    // ========== Mobile Navigation Toggle ==========
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ========== Navbar Scroll Effect ==========
    const navbar = document.querySelector('.navbar');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // ========== Scroll Animations ==========
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger number counter animation when stats section is visible
                if (entry.target.classList.contains('stat-item')) {
                    const numberElement = entry.target.querySelector('.stat-number');
                    if (numberElement && !numberElement.classList.contains('counted')) {
                        animateNumber(numberElement);
                        numberElement.classList.add('counted');
                    }
                }
            }
        });
    }, observerOptions);

    // Observe all fade-up elements
    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // ========== Number Counter Animation ==========
    function animateNumber(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;

        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // ========== Smooth Scrolling for Anchor Links ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========== Parallax Effect for Wiring Background ==========
    const wiringBg = document.getElementById('wiringBg');
    
    if (wiringBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            wiringBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ========== Service Card Hover Effect Enhancement ==========
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========== Project Card Hover Effect Enhancement ==========
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========== Button Ripple Effect ==========
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ========== Active Navigation Link Highlighting ==========
    function highlightNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ========== Form Validation (for Contact page) ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            let isValid = true;
            
            if (name === '') {
                showError('name', 'กรุณากรอกชื่อ');
                isValid = false;
            }
            
            if (email === '' || !isValidEmail(email)) {
                showError('email', 'กรุณากรอกอีเมลที่ถูกต้อง');
                isValid = false;
            }
            
            if (phone === '') {
                showError('phone', 'กรุณากรอกเบอร์โทรศัพท์');
                isValid = false;
            }
            
            if (message === '') {
                showError('message', 'กรุณากรอกข้อความ');
                isValid = false;
            }
            
            if (isValid) {
                // In a real application, you would send this data to a server
                showSuccessMessage('ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด');
                contactForm.reset();
            }
        });
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        // Remove existing error message if any
        const existingError = field.parentElement.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        field.parentElement.appendChild(errorDiv);
        field.classList.add('error');
        
        // Remove error after 3 seconds
        setTimeout(() => {
            errorDiv.remove();
            field.classList.remove('error');
        }, 3000);
    }

    function showSuccessMessage(message) {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        successDiv.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: #10B981;
            color: white;
            padding: 16px 32px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            animation: slideDown 0.3s ease-out;
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 3000);
    }

    // ========== Loading Animation ==========
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('fade-in');
        }
    });

    // ========== Lazy Loading Images ==========
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ========== Back to Top Button ==========
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-blue);
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 6px 20px rgba(30, 64, 175, 0.4)';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
    });

    // ========== Console Message ==========
    console.log('%cSS INTEGRATION', 'font-size: 24px; font-weight: bold; color: #1E40AF;');
    console.log('%cEngineering Excellence', 'font-size: 14px; color: #4B5563;');
    console.log('Website powered by modern web technologies');

})();

// ========== CSS for Ripple Effect ==========
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -20px);
        }
    }
    
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .error-message {
        color: #DC2626;
        font-size: 14px;
        margin-top: 8px;
        animation: slideDown 0.3s ease-out;
    }
    
    input.error,
    textarea.error {
        border-color: #DC2626 !important;
    }
`;
document.head.appendChild(style);
