/// <reference types="cypress"/>
import { LOCATORS as loc } from "../../support/locators";
import "../../support/commandsConta";
import "../../support/commandMovimentacao";

describe("should test at a functional level", () => {
  before(() => {
    cy.login("a@a", "a");
  });

  beforeEach(() => {
    cy.resetApp();
    cy.get(loc.MENU.HOME); // Garnate que os teste smpres iniciem a partir da página inicial
  });

  it("Should create an count", () => {
    cy.acessarMenuConta();
    cy.inserirConta("Conta de Teste");
    cy.get(loc.MESSAGE).should("contain", "Conta inserida com sucesso!");
  });

  it("Should update an account", () => {
    cy.acessarMenuConta();
    cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click();
    cy.inserirConta("Conta alterada agora");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta atualizada com sucesso!");
  });

  it("Should not create an account with same name", () => {
    cy.acessarMenuConta();
    cy.inserirConta("Conta mesmo nome");
    cy.get(loc.MESSAGE).should("contain", "code 400");
  });

  it("Should create a transaction", () => {
    cy.get(loc.MENU.MOVIMENTACAO).click();
    cy.inserirDescricao("Descrição");
    cy.inserirValor(100);
    cy.inserirInteressado("Interesse");
    cy.get(loc.MOVIMENTACAO.CONTA).select("Conta para movimentacoes");
    cy.get(loc.MOVIMENTACAO.STATUS).click();
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Movimentação inserida");
    //Este xpath está checando o nome o valor associado a ele
    cy.xpath(loc.EXTRATO.FUNC_XP_BUSCA_ELEMENTO("Descrição", "100")).should(
      "exist"
    );
  });

  it.only("Should get balance", () => {
    cy.get(loc.MENU.HOME).click();
    cy.xpath(loc.SALDO.FUNC_XP_SALDO_CONTA("Conta para saldo"))
    cy.get(loc.MENU.EXTRATO).click();
    cy.xpath(
      loc.EXTRATO.FUN_XP_ALTERAR_ELEMENTO("Movimentacao 1, calculo saldo")
    ).click();
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should(
      "have.value",
      "Movimentacao 1, calculo saldo"
    );
    cy.get(loc.MOVIMENTACAO.STATUS).click();
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "sucesso");
    cy.get(loc.MENU.HOME).click();
    cy.xpath(
      loc.SALDO.FUNC_XP_SALDO_CONTA("Conta para saldo")
    ).should("contain", "4.034");
  });

  it("Should remove a transaction", () => {
    cy.get(loc.MENU.EXTRATO).click();
    cy.xpath(loc.EXTRATO.FUN_XP_REMOVE_ELEMENTO("Movimentacao para exclusao"));
  });
});
