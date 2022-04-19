/// <reference types="cypress"/>

describe("Esperas...", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Deve aguardar elemento estar disponível", () => {
    cy.get("#novoCampo").should("not.exist");
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("not.exist");
    cy.get("#novoCampo").type("funciona");
  });

  it.only('Uso do find', () => {
      cy.get('#buttonList').click();
      cy.get('#Lista li')
      .find('span')
      .should('contain', 'Item 1');
      cy.get('#Lista li span')      
      .should('contain', 'Item 2');
  })
});
