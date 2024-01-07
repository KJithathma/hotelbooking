// cypress/integration/imageGallery.spec.js
describe('Image Gallery Page', () => {
    beforeEach(() => {
      // Visit the image gallery page before each test
      cy.visit('imageGallery.html');
    });
  
    it('should load the image gallery page', () => {
      // Check if the page has loaded
      cy.get('body').should('exist');
    });
  
    it('should check the main heading', () => {
      // Check if the main heading is present
      cy.get('.heading').should('contain', 'IMAGE GALLERY');
    });
  
    it('should check the accordion items and images', () => {
      // Check if each accordion item is visible
      cy.get('.accordion-item').should('have.length', 4);
  
      // Check if the images in each accordion item are visible
      cy.get('.accordion-item').each((accordionItem, index) => {
        cy.wrap(accordionItem).within(() => {
          // Check if accordion item header is visible
          cy.get('.accordion-item-header').should('exist');
  
          // Check if accordion item body is initially hidden
          cy.get('.accordion-item-body').should('not.be.visible');
  
          // Click on accordion item header to expand it
          cy.get('.accordion-item-header').click();
  
          // Check if accordion item body and images are visible after clicking
          cy.get('.accordion-item-body').should('be.visible');
          cy.get('.accordion-item-body-content .accordion-img').should('have.length.greaterThan', 0);
        });
      });
    });
  
    // Add more test cases as needed
  });
  