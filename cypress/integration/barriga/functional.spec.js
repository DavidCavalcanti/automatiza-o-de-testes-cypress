/// <reference types="cypress"/>
import { LOCATORS as loc } from "../../support/locators";

describe("should test at a functional level", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get(loc.LOGIN.USER).type("a@a");
    cy.get(loc.LOGIN.PASSWORD).type("a");
    cy.get(loc.LOGIN.BTN_LOGIN).click();
    cy.get(loc.MESSAGE).should("contain", "Bem vindo");
  });

  it("Should create an count", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.get(loc.CONTAS.NOME).type("Conta de Teste");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta inserida com sucesso!");
  });

  it("Should update an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click();
    cy.get(loc.CONTAS.NOME).clear().type("Conta alterada");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta atualizada com sucesso!");
  });
});
