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

  it("Uso do find", () => {
    cy.get("#buttonList").click();
    cy.get("#Lista li").find("span").should("contain", "Item 1");
    cy.get("#Lista li span").should("contain", "Item 2");
  });

  it.only("Uso do timout", () => {
    //cy.get("#buttonDelay").click();
    //cy.get('#novoCampo', {timeout: 1000}).should('exist');

    //cy.get("#buttonListDOM").click();
    //cy.get("#lista li span", {timeout: 10000}).should("contain", "Item 2");

    // Para este caso não precisa de timeout porque o a primeir busca já consumiu 
    // parte do tempo, sendo suficiente para a segunda assertiva ser validada.
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span",).should('have.length', 1);
    cy.get("#lista li span",).should('have.length', 2);
  });
});
