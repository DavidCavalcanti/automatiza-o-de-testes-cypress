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

  it("Links", () => {
    cy.get("a").first().click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();
    cy.get("#resultado").should("have.not.text", "Voltou!");
  });

  it("TextFields", () => {
    cy.get("#formNome")
      .type("Cypress test")
      .should("have.value", "Cypress test");
    /*
      'elementosForm:sugestoes' gera erro pois existem alguns comandos 
      no jquery selector que vão utilizar ':', então isso pode confundí-lo.

      cy.get("#elementosForm:sugestoes")
      .type("Cypress test two")
      .should("have.value", "Cypress test two");
      */

    // Para corrigir pode inserir '\' antes do ':' ou '\\' , veja:

    cy.get("#elementosForm\\:sugestoes")
      .type("Cypress test two")
      .should("have.value", "Cypress test two");

    cy.get(":nth-child(2) > :nth-child(6) > input")
      .type("Cypress test three{enter}")
      .should("have.value", "Cypress test three");

    cy.get("[data-cy=dataSobrenome]")
      .type("Teste12345{backspace}")
      .should("have.value", "Teste1234");

    cy.get("#elementosForm\\:sugestoes")
      .clear()// usar quando houver sujeira no campo. Outra opção seria fazer um reload()
      .type('Erro{selectall}Acerto', {delay:100}) //Faz um delay de 100ms na escrita
      .should("have.value", "Acerto");
  });
});
