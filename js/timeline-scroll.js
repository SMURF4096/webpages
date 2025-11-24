document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('timeline-section');
    if (!container) return;

    const bgs = document.querySelectorAll('.timeline-bg');
    const texts = document.querySelectorAll('.timeline-text-item');
    const progressBar = document.getElementById('timeline-bar');
    const totalItems = bgs.length;

    window.addEventListener('scroll', function () {
        const containerRect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        // Calculate how far we've scrolled into the container
        // Start when container top hits top of viewport
        // End when container bottom hits bottom of viewport
        let progress = -containerRect.top / (containerHeight - windowHeight);

        // Clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // Update progress bar
        if (progressBar) {
            progressBar.style.height = `${progress * 100}%`;
        }

        // Determine which item should be active
        // We divide the progress into segments
        const index = Math.floor(progress * totalItems);
        const activeIndex = Math.min(index, totalItems - 1);

        // Update Active Classes
        bgs.forEach((bg, i) => {
            if (i === activeIndex) {
                bg.classList.add('active');
            } else {
                bg.classList.remove('active');
            }
        });

        texts.forEach((text, i) => {
            if (i === activeIndex) {
                text.classList.add('active');
            } else {
                text.classList.remove('active');
            }
        });
    });
});
