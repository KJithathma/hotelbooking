// cypress/integration/menu.spec.js
describe('Menu Page', () => {
    beforeEach(() => {
      // Visit the menu page before each test
      cy.visit('menu.html');
    });
  
    it('should check the main heading', () => {
      // Check if the main heading is present and visible
      cy.get('.heading').should('be.visible').and('contain', 'Menu');
    });
  
    it('should check the "Starters" section', () => {
      // Check if the "Starters" section is visible
      cy.get('.starters').should('be.visible');
  
      // Check if there are items in the "Starters" section
      cy.get('.starters i').should('have.length.greaterThan', 0);
    });
  
    it('should check the "Main Courses" section', () => {
      // Check if the "Main Courses" section is visible
      cy.get('.maincourses').should('be.visible');
  
      // Check if there are items in the "Main Courses" section
      cy.get('.maincourses i').should('have.length.greaterThan', 0);
    });
  
    it('should check the "Salads" section', () => {
      // Check if the "Salads" section is visible
      cy.get('.salads').should('be.visible');
  
      // Check if there are items in the "Salads" section
      cy.get('.salads i').should('have.length.greaterThan', 0);
    });
  
    it('should check the "Desserts" section', () => {
      // Check if the "Desserts" section is visible
      cy.get('.Desserts').should('be.visible');
  
      // Check if there are items in the "Desserts" section
      cy.get('.Desserts i').should('have.length.greaterThan', 0);
    });
  
    it('should check the "Drinks" section', () => {
      // Check if the "Drinks" section is visible
      cy.get('.Drinks').should('be.visible');
  
      // Check if there are items in the "Drinks" section
      cy.get('.Drinks i').should('have.length.greaterThan', 0);
    });
  
    // Add more test cases as needed
  });
  