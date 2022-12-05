class Document {
  verify_document_title(title) {
    cy.get('h1').should('be.visible').and('contain', title);
    return this;
  }
  verify_document_content() {
    cy.get('p').should('be.visible');
  }
}
export default new Document();
