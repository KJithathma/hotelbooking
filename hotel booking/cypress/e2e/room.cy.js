// // cypress/integration/room.spec.js
// describe('Room Page', () => {
//     beforeEach(() => {
//       // Visit the room page before each test
//       cy.visit('room.html');
//     });
  
//     it('should check the main heading', () => {
//       // Check if the main heading is present and visible
//       cy.get('.main-content .mainImage').should('be.visible');
//     });
  
//     it('should check the form submission', () => {
//       // Fill the form with sample data
//       cy.get('input[name="first_name"]').type('John');
//       cy.get('input[name="last_name"]').type('Doe');
//       cy.get('input[name="check_in"]').type('2024-01-15');
//       cy.get('input[name="check_out"]').type('2024-01-20');
//       cy.get('input[name="guest_count"]').type('2');
//       cy.get('input[name="ac_nonac"]').first().check();
//       cy.get('select[name="room_type"]').select('Single Room');
//       cy.get('input[name="contact_number"]').type('1234567890');
  
//       // Submit the form
//       cy.get('input[name="roomsubmit"]').click();
  
//       // Check for success message
//       cy.get('#successMessage').should('be.visible');
//     });
  
//     it('should check the room cards', () => {
//       // Check each room card for visibility and content
//       cy.get('.bodyContent .roomCard').each(($roomCard) => {
//         cy.wrap($roomCard).should('be.visible');
//         cy.wrap($roomCard).find('.roomimg').should('be.visible');
//         cy.wrap($roomCard).find('p').should('include.text', 'from');
//       });
//     });
  
//     // Add more test cases as needed
//   });
  