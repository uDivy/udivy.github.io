class EducationSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <h3>${itemData.institution}</h3>
            <p><strong>${itemData.degree}</strong> (${itemData.years})</p>
            <p>${itemData.description}</p>
        `;
    }

    render() {
        super.renderSectionTitle(); // Render section title from base class
        this.data.forEach(item => {
            super.renderTimelineItem(item, 'timeline-item education-item'); // Render timeline item from base class
        });
    }
}