/// <reference types="cypress" />

describe('fails to create a infection report', () => {
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
    cy.intercept('GET', 'http://localhost:3000/api/survivors', {
      statusCode: 200,
      body: SURVIVORS,
    }).as('survivors');
    cy.intercept('POST', 'http://localhost:3000/api/infection_reports', {
      statusCode: 400,
      body: { reported: ['cannot be the same as reporter'] }
    });
  });

  it('returns an error', () => {
    // Navigates to the create link
    cy.visit('http://localhost:3000');
    cy.get('[data-cy=report-infection-link]').click();

    // Fills up the form
    cy.get('select[id="infection-reporter"]').select(1);
    cy.get('select[id="infection-reported"]').select(1);
    cy.get('[data-cy=save-button').click()

    // Checks the success message is there but the errors is not
    cy.get('.text-danger').should('exist');
    cy.get('.text-success').should('not.exist');
  });
});
