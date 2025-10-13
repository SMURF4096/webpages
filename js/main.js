(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Client Logo Scroll Animation
    function animateLogosOnScroll() {
        const logos = document.querySelectorAll('.client-logo');
        const windowHeight = window.innerHeight;
        
        logos.forEach((logo, index) => {
            const logoTop = logo.getBoundingClientRect().top;
            
            // Trigger animation when logo is 80% visible
            if (logoTop < windowHeight * 0.8) {
                setTimeout(() => {
                    logo.classList.add('fade-in');
                }, index * 50); // Stagger animation by 50ms per logo
            }
        });
    }

    // Run on scroll
    $(window).on('scroll', animateLogosOnScroll);
    
    // Run on page load
    $(document).ready(function() {
        animateLogosOnScroll();
    });
    
})(jQuery);


// Scroll Animation Observer
(function() {
    'use strict';
    
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
                // Optional: unobserve after animation to prevent re-triggering
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with scroll animation
    document.addEventListener('DOMContentLoaded', function() {
        // Timeline items
        const timelineItems = document.querySelectorAll('.journey-item');
        timelineItems.forEach(item => observer.observe(item));
        
        // Value items (index.html)
        const valueItems = document.querySelectorAll('.value-item');
        valueItems.forEach(item => observer.observe(item));
        
        // Service cards (index.html)
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(item => observer.observe(item));
        
        console.log('Scroll animations initialized:', {
            timeline: timelineItems.length,
            values: valueItems.length,
            services: serviceCards.length
        });
    });
})();
