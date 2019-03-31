describe('Home page', () => {
  describe('Search container', () => {
    it('types into search field', () => {
      const txt = 'Hello, World!';

      cy.visit('http://localhost:8080');
      cy.get('[data-cy=searchField]')
        .type(txt)
        .should('have.value', txt);
    });
  });
});
