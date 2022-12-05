class NewPage {
  enter_title(title) {
    cy.get('#id_title')
      .should('be.visible')
      .clear()
      .type(title)
      .should('have.value', title);

    return this;
  }
  enter_content(content) {
    cy.get('#id_content')
      .should('be.visible')
      .clear()
      .type(content)
      .should('have.value', content);
    return this;
  }
  click_create() {
    cy.get('[type="submit"]').should('be.visible').click();
    cy.url().should('contain', Cypress.config().baseUrl + 'wiki/');
    cy.get('h1').should('be.visible').and('have.text');
    return this;
  }

  verify_duplicate_error() {
    cy.get('[type="submit"]').should('be.visible').click();
    cy.get('ul')
      .children()
      .should('be.visible')
      .and('contain', 'Document already exist');
  }
}
export default new NewPage();
