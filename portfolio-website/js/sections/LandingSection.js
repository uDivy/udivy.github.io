class LandingSection extends Section {
    constructor(sectionId, data) {
        super(sectionId); // Landing section doesn't need title in constructor params
        this.data = data;
        this.sectionElement = document.getElementById(sectionId); // Get the section element
    }

    render() {
        if (!this.sectionElement) {
            console.error(`Landing section element with ID '${this.sectionId}' not found.`);
            return;
        }

        const landingContentHTML = `
            <img src="${this.data.profileImage}" alt="Profile Image" class="profile-image" id="profileImage">
            <h1>${this.data.name}</h1>
            <p>${this.data.description}</p>
            <div class="icon-nav">
                ${this.renderIconNav(this.data.iconNavItems)}
            </div>
        `;
        this.sectionElement.innerHTML = landingContentHTML; // Set innerHTML for landing section.
        this.initializeImageErrorHandling(); // Initialize image error handling for profile image in landing
    }

    renderIconNav(iconNavItems) {
        return iconNavItems.map(item => `
            <a href="${item.href}" title="${item.title}">
                <span class="nav-icon"><i class="${item.iconClass}"></i></span>
                <span class="nav-text">${item.text}</span>
            </a>
        `).join('');
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