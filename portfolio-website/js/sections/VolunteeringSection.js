class VolunteeringSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <h3>${itemData.organization}</h3>
            <p><strong>${itemData.role}</strong> (${itemData.years})</p>
            <p>${itemData.description}</p>
        `;
    }

    render() {
        super.renderSectionTitle();
        this.data.forEach(item => {
            super.renderTimelineItem(item, 'timeline-item volunteering-item');
        });
    }
}