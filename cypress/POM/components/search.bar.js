class SearchBar {
  search(search) {
    cy.get('#id_q')
      .should('be.visible')
      .type(search)
      .should('have.value', search)
      .type('{enter}');

    cy.url().should('contain', Cypress.config().baseUrl + 'wiki/');
  }
}
export default new SearchBar();
