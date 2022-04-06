/// <reference types="cypress"/>

describe("Work with basic elementes", () => {
  before(() => {
    //executa uma vez antes do primeiro teste
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    //Executa antes de cada um dos testes
    cy.reload(); // limpa a sujeira de um de um teste para outro
  });

  it('Links', () => {
      cy.get('a').first().click();
      cy.get('#resultado').should('have.text', 'Voltou!');

      cy.reload();
      cy.get('#resultado').should('have.not.text', 'Voltou!');
  } )
});
