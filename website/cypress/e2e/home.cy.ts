describe('home', () => {
  it('can be visited', () => {
    cy.visit('http://localhost:8080/',);
    cy.title().should('eq', 'Home | @idrinth/api-bench',);
  },);
},);
