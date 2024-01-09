describe('contributing', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/contributing',);
    cy.url().should('eq', 'http://localhost:8080/contributing',);
  },);
  it('title matches', () => {
    cy.visit('http://localhost:8080/contributing',);
    cy.title().should('eq', 'Contributing | @idrinth/api-bench',);
  },);
},);
