describe('usage/results', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/usage/results',);
    cy.url().should('eq', 'http://localhost:8080/usage/results',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/usage/results',);
    cy.title().should('eq', 'Results | Usage | @idrinth/api-bench',);
  },);
},);
