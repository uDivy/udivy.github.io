class AwardsSection extends Section {
    constructor(sectionId, data) {
        super(sectionId, data.title, data.iconClass);
        this.data = data.items;
    }

    renderTimelineItemContent(itemData) {
        return `
            <h3>${itemData.award}</h3>
            <p>${itemData.description}</p>
        `;
    }

    render() {
        super.renderSectionTitle();
        this.data.forEach(item => {
            super.renderTimelineItem(item);
        });
    }
}