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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Scroll Progress Bar
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = (scrollTop) / (docHeight - winHeight);
        var scrollPercentRounded = Math.round(scrollPercent * 100);

        $('.scroll-progress').css('width', scrollPercentRounded + '%');
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
        nav: true,
        navText: [
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
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
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

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
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

    // Timeline Animation
    function updateTimeline() {
        const timeline = document.querySelector('.journey-timeline');
        const lineFill = document.querySelector('.timeline-line-fill');
        const items = document.querySelectorAll('.timeline-item');

        if (!timeline || !lineFill) return;

        const timelineRect = timeline.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start drawing when the timeline top enters the bottom 80% of the screen
        const startOffset = windowHeight * 0.8;

        // Calculate scroll progress
        let start = timelineRect.top;
        let totalHeight = timeline.offsetHeight;

        // Calculate how many pixels of the timeline are "past" the trigger point
        let scrolledPast = startOffset - start;

        // Percentage (0 to 100)
        let percentage = (scrolledPast / totalHeight) * 100;
        percentage = Math.max(0, Math.min(100, percentage));

        lineFill.style.height = percentage + '%';

        // Trigger items based on the line position
        // The line "head" is at 'percentage' down the timeline
        const lineHeadY = timelineRect.top + (totalHeight * (percentage / 100));

        items.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            // Trigger when the line head passes the center of the item's badge (approx top + 25px)
            const itemTriggerPoint = itemRect.top + 25;

            if (lineHeadY >= itemTriggerPoint) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Event Listeners for Timeline
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('load', updateTimeline);

    // Run on page load
    $(document).ready(function () {
        animateLogosOnScroll();
        updateTimeline();
    });

})(jQuery);
