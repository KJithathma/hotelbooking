// cypress/integration/restaurant.spec.js
describe('Restaurant Page', () => {
    beforeEach(() => {
      // Visit the restaurant page before each test
      cy.visit('restaurant.html');
    });
  
    it('should check the main heading', () => {
      // Check if the main heading is present and visible
      cy.get('.heading').should('be.visible').and('contain', 'RESTAURANT');
    });
  
    it('should check the description section', () => {
      // Check if the description section is visible
      cy.get('.description').should('be.visible');
  
      // Check if the description contains the expected text
      cy.get('.description p').should('have.text', 'The Marriott hotel invites you to a culinary haven, featuring the epitome of delicious cuisines. With a commitment to quality, our culinary philosophy revolves around using the freshest ingredients from our own farm, ensuring healthy and sustainable dining. Explore a diverse menu, blending Sri Lankan, South Indian, Chinese, Thai, Korean, and Japanese food cultures, offering a symphony of flavors for every palate. Our dedication to excellence is evident in every meticulously crafted dish, providing an unforgettable dining experience immersed in the essence of freshly prepared meals. Welcome to a world where each bite reflects our passion for quality, sustainability, and the celebration of diverse culinary traditions.');
    });
  
    it('should check the main image', () => {
      // Check if the main image is present and visible
      cy.get('.mainImage img').should('be.visible');
    });
  
    it('should check the restaurant images', () => {
      // Check if each restaurant image is visible and has a "View more" link
      cy.get('.menu-container .resp').each(($restaurant) => {
        cy.wrap($restaurant).should('be.visible');
        cy.wrap($restaurant).find('.resimg').should('be.visible');
        cy.wrap($restaurant).find('.view a').should('have.attr', 'href');
      });
    });
  
    // Add more test cases as needed
  });
  