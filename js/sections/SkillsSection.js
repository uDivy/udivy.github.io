class SkillsSection extends Section {

    constructor(sectionId, data) {
  
      super(sectionId, data.title, data.iconClass);
  
      this.categories = data.categories; // Assuming your data.js is structured with categories
  
    }
  
  
  
    renderCategoryCard(categoryName, skills) {
  
      const categoryCard = document.createElement('div');
  
      categoryCard.classList.add('skill-category-card'); // Changed to category card
  
  
  
      const categoryHeading = document.createElement('h3');
  
      categoryHeading.textContent = categoryName;
  
      categoryCard.appendChild(categoryHeading);
  
  
  
      const skillsList = document.createElement('ul');
  
      skillsList.classList.add('skill-list'); // Class for bullet point list
  
  
  
      skills.forEach(skill => {
  
        const skillItem = document.createElement('li');
  
        skillItem.textContent = skill;
  
        skillsList.appendChild(skillItem);
  
      });
  
  
  
      categoryCard.appendChild(skillsList);
  
      return categoryCard;
  
    }
  
  
  
    render() {
  
      super.renderSectionTitle(); // Render section title from base class
  
      const categoriesCardContainer = document.getElementById('skills-categories-card-container');
  
      if (!categoriesCardContainer) return; // Exit if container not found
  
  
  
      this.categories.forEach(category => {
  
        const categoryCardElement = this.renderCategoryCard(category.name, category.skills);
  
        categoriesCardContainer.appendChild(categoryCardElement);
  
      });
  
    }
  
  }