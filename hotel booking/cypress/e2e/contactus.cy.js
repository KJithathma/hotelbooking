// cypress/integration/contactUs.spec.js
describe('Contact Us Page', () => {
    beforeEach(() => {
      // Visit the contact us page before each test
      cy.visit('contactus.html');
    });
  
    it('should check the FAQ section', () => {
      // Check if the FAQ section is present
      cy.get('.faq').within(() => {
        cy.get('h3').should('contain', 'FAQ');
        cy.get('.faqcontainer').should('exist');
      });
    });
  
    it('should check the "Ask a Question" form', () => {
      // Check if the "Ask a Question" section is present
      cy.get('.askaquestion').within(() => {
        cy.get('h3').should('contain', 'ASK A QUESTION');
        cy.get('form[name="ask"]').within(() => {
          cy.get('textarea[name="question"]').should('exist');
          cy.get('input[name="email"]').should('exist');
          cy.get('button').should('exist');
        });
        cy.contains('We will provide you with answers soon through your email').should('exist');
      });
    });
  
    it('should check the "We Are Available On" section', () => {
      // Check if the "We Are Available On" section is present
      cy.get('.availableon').within(() => {
        cy.get('h3').should('contain', 'WE ARE AVAILABLE ON');
        cy.get('.contactusicon').should('have.length.greaterThan', 0);
        cy.contains('Address:').should('exist');
        cy.contains('Telephone:').should('exist');
      });
    });
  
    // Add more test cases as needed
  });
  