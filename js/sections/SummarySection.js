class SummarySection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data;
        this.sectionElement = document.getElementById(sectionId); // Get the section element
    }

    render() {
        if (!this.sectionElement) {
            console.error(`Summary section element with ID '${this.sectionId}' not found.`);
            return;
        }
        this.renderSectionTitle(); // Render the section title first

        const summaryContentHTML = `
            <img src="${this.data.profileImage}" alt="Profile Image" class="profile-image">
            <div class="summary-text">
                <ul>
                    ${this.renderSummaryList(this.data.summaryPoints)}
                </ul>
            </div>
        `;
        this.sectionElement.classList.add('summary-section'); // Add the summary-section class
        this.sectionElement.innerHTML = summaryContentHTML; // Set innerHTML after title is rendered
        this.initializeImageErrorHandling();
    }

    renderSummaryList(summaryPoints) {
        return summaryPoints.map(point => `<li><strong>${point.label}:</strong> ${point.description}</li>`).join('');
    }

    initializeImageErrorHandling() {
        const profileImages = this.sectionElement.querySelectorAll('.profile-image');
        profileImages.forEach(img => {
            img.onerror = function() {
                this.src = 'files/wolf.jpg';
                this.classList.add('default-image');
            };
        });
    }
}