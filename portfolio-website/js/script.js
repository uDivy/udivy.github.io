// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // Load data
    const data = siteData;

    // Initialize Sections using OOP
    const landingSection = new LandingSection('landing', data.landing);
    landingSection.render();

    const summarySection = new SummarySection('journey-summary', data.summarySection);
    summarySection.render();

    const educationSection = new EducationSection('education', data.educationSection);
    educationSection.render();

    const workSection = new WorkSection('work', data.workSection);
    workSection.render();

    const volunteeringSection = new VolunteeringSection('volunteering', data.volunteeringSection);
    volunteeringSection.render();

    const projectsSection = new ProjectsSection('projects', data.projectsSection);
    projectsSection.render();

    const skillsSection = new SkillsSection('skills', data.skillsSection);
    skillsSection.render();

    const awardsSection = new AwardsSection('awards', data.awardsSection);
    awardsSection.render();

    const certificationsSection = new CertificationsSection('certifications', data.certificationsSection);
    certificationsSection.render();


    // Initialize SPA View
    const spaView = new SPAView('spaToggle', 'spa-view', 'main-content');

    // Color Switcher Functionality - Toggling and Color Change (moved to script.js)
    const paletteToggle = document.getElementById('paletteToggle');
    const colorSwitcher = document.getElementById('colorSwitcher');
    const primaryColor = document.getElementById('primaryColor');
    const secondaryColor = document.getElementById('secondaryColor');
    const textColor = document.getElementById('textColor');


    paletteToggle.addEventListener('click', function() {
        colorSwitcher.classList.toggle('active');
    });


    primaryColor.oninput = function() {
        document.documentElement.style.setProperty('--primary-color', this.value);
    };
    secondaryColor.oninput = function() {
        document.documentElement.style.setProperty('--secondary-color', this.value);
    };
    textColor.oninput = function() {
        document.documentElement.style.setProperty('--text-color', this.value);
    };

     // Scroll Arrow Functionality (moved to script.js)
    const scrollArrow = document.getElementById('scrollArrow');

    scrollArrow.addEventListener('click', function() {
        if (scrollArrow.querySelector('i').classList.contains('fa-chevron-down')) {
            // Scroll to bottom
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        } else {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Adjust for viewport height

        if (scrollPosition > documentHeight - 50 ) { // Near bottom (adjust 50px threshold as needed)
            scrollArrow.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
            scrollArrow.setAttribute('title', 'Scroll to Top');
        } else {
            scrollArrow.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            scrollArrow.setAttribute('title', 'Scroll to Bottom');
        }
    });

});