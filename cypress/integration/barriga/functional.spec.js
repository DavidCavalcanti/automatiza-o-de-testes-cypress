/// <reference types="cypress"/>
import { LOCATORS as loc } from "../../support/locators";
import "../../support/commandsConta";
import "../../support/commandMovimentacao";

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
    cy.inserirConta("Conta alterada");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta atualizada com sucesso!");
  });

  it("Should not create an account with same name", () => {
    cy.acessarMenuConta();
    cy.inserirConta("Conta alterada");
    cy.get(loc.MESSAGE).should("contain", "code 400");
  });

  it("Should create a transaction", () => {
    cy.get(loc.MENU.MOVIMENTACAO).click();
    cy.inserirDescricao("Descrição");
    cy.inserirValor(100);
    cy.inserirInteressado("Interesse");
    cy.get(loc.MOVIMENTACAO.CONTA).select("Conta alterada");
    cy.get(loc.MOVIMENTACAO.STATUS).click();
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Movimentação inserida");
    //Este xpath está checando o nome o valor associado a ele
    cy.xpath(loc.EXTRATO.FUNC_XP_BUSCA_ELEMENTO("Descrição")).should("exist");
  });

  it("Should get balance", () => {
    cy.get(loc.MENU.HOME).click();
    cy.xpath(loc.SALDO.FUNC_XP_SALDO_CONTA("Conta alterada")).should(
      "contain",
      "100,00"
    );
  });
});
