// cypress/integration/index.spec.js
describe('Index Page', () => {
    beforeEach(() => {
      // Visit the index page before each test
      cy.visit('index.html');
  
      // Wait for the page to fully load
      cy.contains('.heading', 'EMBRACE THE MARRIOTT HOTEL').should('be.visible').wait(1000);
    });
  
    it('should check the main heading', () => {
      // Check if the main heading is present
      cy.contains('.heading', 'EMBRACE THE MARRIOTT HOTEL').should('be.visible');
    });
  
    it('should check the "Offers for You" section', () => {
      // Check if the "Offers for You" section is visible
      cy.get('.offers').should('exist');
  
      // Check if the offers content is visible
      cy.get('.offers p').should('have.length.greaterThan', 0);
    });
  
    it('should check the "Why Book With Us" section', () => {
      // Check if the "Why Book With Us" section is visible
      cy.get('.whyBookWithUs').should('exist');
  
      // Check if the reasons to book content is visible
      cy.get('.whyBookWithUs .whyus').should('have.length', 3);
    });
  
    it('should check the "Our Image Gallery" section', () => {
      // Check if the "Our Image Gallery" section is visible
      cy.get('.gallery').should('exist');
  
      // Check if the link to the image gallery is visible
      cy.get('.gallerycover a').should('have.attr', 'href', 'imageGallery.html');
    });
  
    // Add more test cases as needed
  });
  