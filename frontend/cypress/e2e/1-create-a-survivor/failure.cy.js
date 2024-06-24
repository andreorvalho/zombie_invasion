/// <reference types="cypress" />

describe('fails to create a survivor successfully', () => {
  it('displays a list of errors', () => {
    // Navigates to the create link
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=create-link]').click()

    // Fills up the form
    cy.get('input[id="survivor-name"]').type('Andre')
    cy.get('input[id="survivor-age"]').type('sadsadas')
    cy.get('input[id="survivor-gender"]').type('Male')
    cy.get('input[id="survivor-latitude"]').type('1231312')
    cy.get('input[id="survivor-longitute"]').type('6546456')
    cy.get('[data-cy=save-button').click()

    // Checks the success message is there but the errors is not
    cy.get('.text-danger').should('have.text', 'age: A valid integer is required.')
    cy.get('.text-success').should('not.exist');
  });
});
