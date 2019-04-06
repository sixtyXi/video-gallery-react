const BASE_URL = 'http://localhost:8080';

describe('Home page', () => {
  describe('Search container', () => {
    it('types into search field', () => {
      const txt = 'Hello, World!';

      cy.visit(BASE_URL);
      cy.get('[data-cy=searchField]')
        .type(txt)
        .should('have.value', txt);
    });
  });

  describe('Logo element', () => {
    it('header should contains logo', () => {

      cy.visit(BASE_URL);
      cy.get('[data-cy=header] [data-cy=logo]').should('be.visible');
    });
  });

  describe('Movie Thumb', () => {
    it('should contains movie thumbs', () => {

      cy.visit(BASE_URL);
      cy.get('[data-cy=movieThumb]').should('be.visible');
    });
  });
});
