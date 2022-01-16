describe('Mi primer test', () => {
  it('Ver si la app funciona', () => {
    cy.visit('https://petgram-yasniel1408.vercel.app/');
  });
  it('Navegar a una categoria y vemos fotos', () => {
    cy.visit('/pets/1');
    cy.get('article');
  });
  it('Ver si podemos navegar con la nav a la home', () => {
    cy.visit('/pets/1');
    cy.get('nav a').first().click();
    cy.url().should('include', '/');
  });
  it('Los usuarios no registrados ven el form de inicion de session al ir a /favs', () => {
    cy.visit('/favs');
    cy.get('form').should('have.length', 2);
  });
});
