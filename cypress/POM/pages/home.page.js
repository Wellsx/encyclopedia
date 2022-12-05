class HomePage {
  visit_HomePage(device) {
    cy.viewport(device);
    cy.visit('/');
    cy.get('h1').should('be.visible').and('contain', 'All Pages');
    cy.get('ul').children().should('have.length.greaterThan', 1);
    cy.url().should('eq', Cypress.config().baseUrl);
    return this;
  }

  click_on_page(page) {
    cy.get('ul').children().contains(page).should('be.visible').click();
    cy.url().should('eq', Cypress.config().baseUrl + 'wiki/' + page + '/');
    return this;
  }
}
export default new HomePage();
