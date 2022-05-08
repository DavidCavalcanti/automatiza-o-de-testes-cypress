/// <reference types="cypress"/>

describe("should test at a functional level", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get("[data-test=email]").type("a@a");
    cy.get("[data-test=passwd]").type("a");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Bem vindo");
  });

  it("Should create an count", () => {
    cy.get("[data-test=menu-settings]").click();
    cy.get('[href="/contas"]').click();
    cy.get("[data-test=nome]").type("Conta de Teste");
    cy.get(".btn").click();
    cy.get(".toast-success > .toast-message").should(
      "contain",
      "Conta inserida com sucesso!"
    );
  });

  it("Should update an account", () => {
    cy.get("[data-test=menu-settings]").click();
    cy.get('[href="/contas"]').click();
    cy.xpath(
      "//table//td[contains(.,'Conta de Teste')]/..//i[@class='far fa-edit']"
    ).click();
    cy.get("[data-test=nome]").clear().type("Conta alterada");
    cy.get(".btn").click();
    cy.get(".toast-message").should("contain", "Conta atualizada com sucesso!");
  });
});
