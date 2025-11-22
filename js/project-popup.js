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

            // Populate modal
            document.getElementById('projectModalLabel').textContent = data.name;
            document.getElementById('projectModalImage').src = imgSrc;
            document.getElementById('projectModalName').textContent = data.name;
            document.getElementById('projectModalValue').textContent = data.value;
            document.getElementById('projectModalScope').innerHTML = data.scope.join('');
            document.getElementById('projectModalDescription').textContent = data.description;

            // Show modal
            modal.show();
        });
    });
});
