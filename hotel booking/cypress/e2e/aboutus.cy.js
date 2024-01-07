// cypress/integration/aboutUs.spec.js
describe('About Us Page', () => {
    it('loads the about us page and checks content', () => {
      // Visit the about us page
      cy.visit('aboutus.html');
  
      // Check if the main heading is present
      cy.get('.heading').should('contain', 'About us');
  
      // Check if the image is present and has the correct source
      cy.get('.mainimg').should('exist');
      cy.get('.mainimg').should('have.attr', 'src', 'IMAGES/mainImgaboutus.jpg');
  
      // Check if the description section contains text
      cy.get('.description h3').should('contain', 'GET BETTER EXPERIENCE WITH US');
      cy.get('.description p').should('exist');
  
      // Add more assertions as needed
    });
  
    // You can add more test cases for different scenarios on this page
  });
  