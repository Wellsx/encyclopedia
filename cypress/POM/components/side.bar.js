class SideBar {
  click_home() {
    cy.get('.sidebar')
      .should('be.visible')
      .children()
      .contains('Home')
      .should('be.visible')
      .click();
    cy.url().should('eq', Cypress.config().baseUrl);
  }
  click_create_new_page() {
    cy.get('.sidebar')
      .should('be.visible')
      .children()
      .contains('Create New Page')
      .should('be.visible')
      .click();
    cy.url().should('eq', Cypress.config().baseUrl + 'create/');
    return this;
  }
  click_random_page() {
    cy.get('.sidebar')
      .should('be.visible')
      .children()
      .contains('Random Page')
      .should('be.visible')
      .click();
    cy.url().should('contain', Cypress.config().baseUrl + 'wiki/');
    cy.get('h1').should('be.visible');
    return this;
  }
}
export default new SideBar();
