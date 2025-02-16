class WorkSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <div class="work-item-content">
                <div class="company-logo">
                    <img src="${itemData.logo}" alt="${itemData.company} Logo">
                </div>
                <div class="work-details">
                    <h3>
                        <a href="${itemData.website}" target="_blank">${itemData.company} <i class="${itemData.companyIcon}" style="font-size: 0.7em; vertical-align: baseline; color: var(--secondary-color);"></i></a>
                    </h3>
                    <p class="location">${itemData.location}</p>
                    <p class="dates">${itemData.dates}</p>
                    <p class="role"><em>${itemData.role}</em></p>
                    <ul class="responsibilities">
                        ${this.renderResponsibilities(itemData.responsibilities)}
                    </ul>
                    <p><a href="${itemData.website}" target="_blank" class="visit-website">Visit Website</a></p>
                </div>
            </div>
        `;
    }

    renderResponsibilities(responsibilities) {
        return responsibilities.map(resp => `<li>${resp}</li>`).join('');
    }

    render() {
        super.renderSectionTitle(); // Render section title from base class
        this.data.forEach(item => {
            super.renderTimelineItem(item, 'timeline-item work-item'); // Render timeline item from base class
        });
        this.initializeImageErrorHandling();
    }

    initializeImageErrorHandling() {
        const companyLogos = this.timelineContainer.querySelectorAll('.company-logo img');
        companyLogos.forEach(img => {
            img.onerror = function() {
                this.src = 'files/wolf.jpg';
            };
        });
    }
}