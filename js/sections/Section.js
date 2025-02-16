class Section {

    constructor(sectionId, title, iconClass) {
  
      this.sectionId = sectionId;
  
      this.title = title;
  
      this.iconClass = iconClass;
  
      this.sectionElement = document.getElementById(sectionId);
  
      if (!this.sectionElement) {
  
        console.error(`Section element with ID '${sectionId}' not found in the HTML.`);
  
        return; // Exit if section element is not found
  
      }
  
      this.timelineContainer = this.sectionElement.querySelector('.timeline');
  
      if (!this.timelineContainer && !['landing', 'summary-section', 'skills', 'journey-summary'].includes(
        sectionId)) { // Timeline not needed for landing, summary, skills
  
        console.error(`Timeline container not found in section '${sectionId}'.`);
  
        return; // Exit if timeline container is not found where expected
  
      }
  
    }
  
  
  
    renderSectionTitle() {
  
      if (!this.sectionElement) return; // Exit if section element is not valid
  
  
  
      let titleHTML =
        `<h2>${this.title} <i class="${this.iconClass}" style="font-size: 0.8em; vertical-align: baseline; color: var(--secondary-color);"></i></h2>`;
  
      this.sectionElement.insertAdjacentHTML('afterbegin', titleHTML);
  
    }
  
  
  
    renderTimelineItem(itemData, itemType = 'timeline-item') {
  
      if (!this.timelineContainer) return; // Exit if timeline container is not valid
  
  
  
      let timelineItemHTML = `
      
      <div class="${itemType}">
      
      ${this.renderTimelineItemContent(itemData)}
      
      </div>
      
      `;
  
      this.timelineContainer.insertAdjacentHTML('beforeend', timelineItemHTML);
  
    }
  
  
  
    // Method to be overridden by subclasses to provide specific content for each timeline item
  
    renderTimelineItemContent(itemData) {
  
      console.warn('renderTimelineItemContent method should be implemented by subclass');
  
      return '';
  
    }
  
  
  
    render() {
  
      this.renderSectionTitle();
  
      // Subclasses will handle rendering timeline items or other specific content
  
    }
  
  }