/// <reference types="cypress"/>
import { LOCATORS as loc } from "../../support/locators";
import "../../support/commandsConta";

describe("should test at a functional level", () => {
  before(() => {
    cy.login("a@a", "a");
    cy.resetApp();
  });

  it("Should create an count", () => {
    cy.acessarMenuConta();
    cy.inserirConta("Conta de Teste");
    cy.get(loc.MESSAGE).should("contain", "Conta inserida com sucesso!");
  });

  it("Should update an account", () => {
    cy.acessarMenuConta();
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click();
    cy.get(loc.CONTAS.NOME).clear().type("Conta alterada");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta atualizada com sucesso!");
  });
});
