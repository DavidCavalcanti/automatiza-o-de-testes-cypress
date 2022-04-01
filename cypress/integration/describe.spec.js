/// <reference types="cypress" />
/**
 * it: decreve um teste
 * describe: agrupa testes
 * 
 * .skip: não executa um teste. Exemplo: describe.skip ou it.skip
 * .only
 */

// teste externo que está na raiz do arquivo
it("A external test...", () => {});

//teste interno (it) que está dentro de uma grupo
describe("Should group tests..", () => {
  describe("Should group more specific tests...", () => {
    it.skip("A specific test...", () => {});
  });
  it("A internal test...", () => {});
});
