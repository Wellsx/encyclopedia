class HomePage {
  visit_HomePage() {
    cy.visit('/');
    cy.get('h1').should('be.visible').and('contain', 'All Pages');
    cy.get('ul').children().should('have.length.greaterThan', 1);
    cy.url().should('eq', Cypress.config().baseUrl);
  }
}
export default new HomePage();
