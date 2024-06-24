/// <reference types="cypress" />

describe('update a survivor successfully', () => {
  const SURVIVORS = [
    {
      id: 1,
      name: 'John Doe',
      age: '33',
      gender: 'Male',
      latitude: '12312312',
      longitude: '46546577',
    },
    {
      id: 2,
      name: 'Marie Pop',
      age: '30',
      gender: 'Female',
      latitude: '12312312',
      longitude: '46546577',
    }
  ];

  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/api/survivors/', {
      statusCode: 200,
      body: SURVIVORS,
    }).as('survivors');
    cy.intercept('PUT', 'http://localhost:3000/api/survivors/1', {
      statusCode: 200
    });
  });

  it('updates the location of the surviver', () => {
    // Navigates to the create link
    cy.visit('http://localhost:3000')
    cy.get('[data-cy=update-location-link]').click()
    cy.wait('@survivors').get('[data-cy=survivor-name]').first().should('have.text', SURVIVORS[0].name)
    cy.get('[data-cy=survivor-name]').last().should('have.text', SURVIVORS[1].name)

    // // Fills up the form
    cy.get('[data-cy=edit-location-button]').first().click()
    cy.get('input[id="survivor-latitude"]').type('432423234')
    cy.get('input[id="survivor-longitude"]').type('6565656')
    cy.get('[data-cy=save-button').click()

    // Checks the success message is there but the errors is not
    cy.get('.text-danger').should('not.exist');
    cy.get('.text-success').should('exist');
  });
});
