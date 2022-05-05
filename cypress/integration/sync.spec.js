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

  it("Uso do timout", () => {
    //cy.get("#buttonDelay").click();
    //cy.get('#novoCampo', {timeout: 1000}).should('exist');

    //cy.get("#buttonListDOM").click();
    //cy.get("#lista li span", {timeout: 10000}).should("contain", "Item 2");

    // Para este caso não precisa de timeout porque o a primeir busca já consumiu
    // parte do tempo, sendo suficiente para a segunda assertiva ser validada.
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").should("have.length", 1);
    cy.get("#lista li span").should("have.length", 2);
  });


  // then aguarda o get ser finalizado para então ser  executado
  // Should não aguarda, ele já faz a busca ao mesmo tempo que faz a verificação
  it.only("Should vs Then", () => {
    cy.get("#buttonListDOM").click();
    cy.get("#lista li span").then((elemento) => {
      // Dentro deste escopo não estamos mais trabalhando com elementos do cypress,
      // então não podemos utilizar o should para fazer assertivas. 'elemento' é um
      // elemento html que foi captura, teremos que tratar como um jquery. Veja como:

      //should('have.length', 1)
      expect(elemento).to.have.length(1);  
      return 2;    
    })
    .then(elemento =>{
      expect(elemento).to.have.length(2);
    });
  });
});
