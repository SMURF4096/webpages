document.addEventListener('DOMContentLoaded', function () {
    const clientLogos = document.querySelectorAll('.client-logo');
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));

    // Placeholder data generator
    const getProjectData = (name) => {
        return {
            name: name || "Project Name",
            value: "XX,XXX,XXX THB",
            scope: [
                "<li><i class='fa fa-check text-success me-2'></i>Electrical System Installation</li>",
                "<li><i class='fa fa-check text-success me-2'></i>HVAC System Design & Setup</li>",
                "<li><i class='fa fa-check text-success me-2'></i>Plumbing & Sanitary Works</li>",
                "<li><i class='fa fa-check text-success me-2'></i>Maintenance Service</li>"
            ],
            description: "Detailed description of the project scope and achievements. This is a placeholder text that can be updated with specific project details."
        };
    };

    // Project Gallery Data
    const projectGalleries = {
        "โรงพยาบาลกรุงเทพตราด": [
            "img/projects/bangkoktrad/P0001691.JPG", "img/projects/bangkoktrad/P0001692.JPG", "img/projects/bangkoktrad/P0001693.JPG",
            "img/projects/bangkoktrad/P0001694.JPG", "img/projects/bangkoktrad/P0001695.JPG", "img/projects/bangkoktrad/P0001696.JPG",
            "img/projects/bangkoktrad/P0001697.JPG", "img/projects/bangkoktrad/P0001698.JPG", "img/projects/bangkoktrad/P0001699.JPG",
            "img/projects/bangkoktrad/P0001700.JPG", "img/projects/bangkoktrad/P0001701.JPG", "img/projects/bangkoktrad/P0001702.JPG",
            "img/projects/bangkoktrad/P0001703.JPG", "img/projects/bangkoktrad/P0001704.JPG", "img/projects/bangkoktrad/P0001705.JPG",
            "img/projects/bangkoktrad/P0001706.JPG", "img/projects/bangkoktrad/P0001707.JPG", "img/projects/bangkoktrad/P0001708.JPG",
            "img/projects/bangkoktrad/P0001709.JPG", "img/projects/bangkoktrad/P0001710.JPG", "img/projects/bangkoktrad/P0001711.JPG",
            "img/projects/bangkoktrad/P0001712.JPG", "img/projects/bangkoktrad/P0001713.JPG", "img/projects/bangkoktrad/P0001714.JPG",
            "img/projects/bangkoktrad/P0001715.JPG", "img/projects/bangkoktrad/P0001716.JPG", "img/projects/bangkoktrad/P0001717.JPG",
            "img/projects/bangkoktrad/P0001718.JPG", "img/projects/bangkoktrad/P0001719.JPG", "img/projects/bangkoktrad/P0001720.JPG"
        ]
    };

    clientLogos.forEach(logo => {
        // Add cursor pointer to indicate clickability
        logo.style.cursor = 'pointer';
        logo.style.transition = 'transform 0.3s ease';

        // Add hover effect
        logo.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
        });

        logo.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });

        // Add click handler
        logo.addEventListener('click', function () {
            const clientName = this.getAttribute('alt');
            const imgSrc = this.getAttribute('src');
            const data = getProjectData(clientName);
            const galleryImages = projectGalleries[clientName];

            // Populate modal
            document.getElementById('projectModalLogo').src = imgSrc; // Set logo in header
            document.getElementById('projectModalName').textContent = data.name;
            document.getElementById('projectModalValue').textContent = data.value;
            document.getElementById('projectModalScope').innerHTML = data.scope.join('');
            document.getElementById('projectModalDescription').textContent = data.description;

            const imageContainer = document.getElementById('projectModalImageContainer'); // We need to target a container

            // If we don't have a container, let's assume the image ID is the container or we replace it
            // For safety, let's find the image element and replace it with a carousel or reset it
            const modalImage = document.getElementById('projectModalImage');
            const modalBody = modalImage.parentElement;

            // Clear previous gallery if any
            const existingCarousel = document.getElementById('projectCarousel');
            if (existingCarousel) {
                existingCarousel.remove();
            }
            modalImage.style.display = 'block'; // Reset single image visibility

            if (galleryImages && galleryImages.length > 0) {
                modalImage.style.display = 'none'; // Hide single image

                // Create Carousel
                const carouselId = 'projectCarousel';
                const carouselHtml = `
                    <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            ${galleryImages.map((img, index) => `
                                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                    <img src="${img}" class="d-block w-100 rounded" alt="Project Image ${index + 1}" style="height: 400px; object-fit: cover;">
                                </div>
                            `).join('')}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: rgba(0,0,0,0.5); border-radius: 50%;"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                `;
                modalImage.insertAdjacentHTML('afterend', carouselHtml);
            } else {
                modalImage.src = imgSrc; // Use the logo as the project image
            }

            // Show modal
            modal.show();
        });
    });
});
