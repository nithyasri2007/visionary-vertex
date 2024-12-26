document.addEventListener('DOMContentLoaded', function() {
    // Get all "View more" elements
    const viewMoreElements = document.querySelectorAll('.view-more');
    // Add click event listener to each "View more" element
    viewMoreElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Find the next sibling element (the plant details)
            const plantDetails = this.nextElementSibling;
            // Toggle the visibility of the plant details
            if (plantDetails.style.display === 'none' || plantDetails.style.display === '') {
                plantDetails.style.display = 'block';
                this.textContent = 'View less';
            } else {
                plantDetails.style.display = 'none';
                this.textContent = 'View more';
            }
        });
    });
});
