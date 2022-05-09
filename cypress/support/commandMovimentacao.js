import { LOCATORS as loc } from "./locators";

Cypress.Commands.add("inserirDescricao", (descricao) => {
  cy.get(loc.MOVIMENTACAO.DESCRICAO).clear().type(descricao);
});

Cypress.Commands.add("inserirValor", (valor) => {
  cy.get(loc.MOVIMENTACAO.VALOR).clear().type(valor);
});

Cypress.Commands.add("inserirInteressado", (interessado) => {
  cy.get(loc.MOVIMENTACAO.INTERESSADO).clear().type(interessado);
});
