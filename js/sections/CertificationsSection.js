class CertificationsSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <h3>${itemData.certification}</h3>
            <p>${itemData.organization} (${itemData.years})</p>
        `;
    }

    render() {
        super.renderSectionTitle();
        this.data.forEach(item => {
            super.renderTimelineItem(item);
        });
    }
}