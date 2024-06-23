/// <reference types="cypress" />

describe('survivors CRUD', () => {
  const SURVIVORS = [
    {
      id: 1,
      name: 'John Doe',
      age: '33',
      gender: 'Male',
      latitute: '12312312',
      longitude: '46546577',
    },
    {
      id: 2,
      name: 'Marie Pop',
      age: '30',
      gender: 'Female',
      latitute: '12312312',
      longitude: '46546577',
    }
  ];

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'http://localhost:3000/api/survivors/', {
      statusCode: 200,
      body: SURVIVORS,
    }).as('survivors');
  });

  describe('visit the survivors page', () => {
    it('displays a list of all the existing survivors', () => {
      cy.wait('@survivors').get('[data-cy=survivor-name]').first().should('have.text', SURVIVORS[0].name)
      cy.get('[data-cy=survivor-name]').last().should('have.text', SURVIVORS[1].name)

    });
  });
});
