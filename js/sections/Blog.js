// js/Blog.js
class SPAView {
    constructor(spaToggleId, spaViewId, mainContentId, spaData) { // Pass spaData as argument
        this.spaToggle = document.getElementById(spaToggleId);
        this.spaView = document.getElementById(spaViewId);
        this.mainContent = document.getElementById(mainContentId);
        this.spaData = spaData; // Store spaData in the class
        this.spaSectionsRendered = false; // Flag to track if sections have been rendered

        if (!this.spaToggle || !this.spaView || !this.mainContent) {
            console.error("SPA elements not found in constructor.");
            return;
        }

        this.spaToggle.addEventListener('click', () => this.toggleSPA());
    }

    toggleSPA() {
        this.spaView.classList.toggle('active');
        this.mainContent.classList.toggle('spa-active');

        if (this.spaView.classList.contains('active') && !this.spaSectionsRendered) {
            this.spaSectionsRendered = true; // Set flag to true after rendering once
        }
    }
    
}