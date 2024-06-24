/// <reference types="cypress" />

describe('create a survivor successfully', () => {
  beforeEach(() => {
    cy.intercept('POST', 'http://localhost:3000/api/survivors/', {
      statusCode: 200
    });
  });

  it('creates a survivor with the minimal necessary fields', () => {
    // Navigates to the create link
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=create-link]').click();

    // Fills up the form
    cy.get('input[id="survivor-name"]').type('Andre');
    cy.get('input[id="survivor-age"]').type('37');
    cy.get('input[id="survivor-gender"]').type('Male');
    cy.get('input[id="survivor-latitude"]').type('1231312');
    cy.get('input[id="survivor-longitude"]').type('6546456');
    cy.get('[data-cy=save-button').click();

    // Checks the success message is there but the errors is not
    cy.get('.text-danger').should('not.exist');
    cy.get('.text-success').should('exist');
  });

  it('creates a survivor with all the fields', () => {
    // Navigates to the create link
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=create-link]').click();

    // Fills up the form
    cy.get('input[id="survivor-name"]').type('Andre');
    cy.get('input[id="survivor-age"]').type('37');
    cy.get('input[id="survivor-gender"]').type('Male');
    cy.get('input[id="survivor-latitude"]').type('1231312');
    cy.get('input[id="survivor-longitude"]').type('6546456');
    cy.get('input[id="survivor-water"]').type(1);
    cy.get('input[id="survivor-food"]').type(1);
    cy.get('input[id="survivor-medication"]').type(1);
    cy.get('input[id="survivor-ammunition"]').type(1);
    cy.get('[data-cy=save-button').click();

    // Checks the success message is there but the errors is not
    cy.get('.text-danger').should('not.exist');
    cy.get('.text-success').should('exist');
  });
});
