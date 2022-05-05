/// <reference types="cypress"/>

describe("Helpers", () => {
  it("Wrap", () => {
    const objeto = { name: "User", old: 23 };
    expect(objeto).to.have.property("name");

    // fazendo uma assertiva no obejto
    // objeto.should('have.property', 'name');
    // não funciona porque 'obejto' não tem o should,
    // quem tem o should é API do cypress. Resolvendo com wrap:

    //Encapsula 'objeto'com o cypress usando wrap
    cy.wrap(objeto).should("have.property", "name");

    cy.visit("https://wcaquino.me/cypress/componentes.html");
    /* cy.get("#formNome").then((el) => {
      // el.type('funciona?'); -> Não funciona

      // el.val("Funciona via jquery"); -> Funciona via jquery

      cy.wrap(el).type('Funcianado via Cypress');
    }); */

    // Essa promise não é gerenciada pelo cypress
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 500);
    });

    cy.get("#buttonSimple").then(() =>
      console.log("encontrei o primeiro botão")
    );

    //promise.then((numero) => console.log(numero));

    //gerenciando a promise com cypress
    cy.wrap(promise).then((numero) => console.log(numero));

    cy.get("#buttonList").then(() =>
      console.log("encontrei o primeiro botão 2")
    );
  });

  // .its() -> pega uma propriedade do objeto
  it.only("Its...", () => {
    const objeto = { name: "User", old: 23 };
    cy.wrap(objeto).should("have.property", "name", "User");
    cy.wrap(objeto).its("name").should("be.equal", "User");

    const objeto2 = {
      nome: "David", //
      idade: 23,
      endereco: {
        rua: "Rua tamandaré",
        numero: 347,
      },
    };

    // Encadeando its:
    /* cy.wrap(objeto2)
      .its("endereco")
      .its("numero")
      .then((el) => {
        expect(el).to.be.equal(347);
      }); */

    // Melhorando o encadeamento
    cy.wrap(objeto2).its("endereco.rua").should("contain", "Rua tamandaré");
    cy.wrap(objeto2).its("endereco.numero").should("be.equal", 347);
  });

  it.only("Invoke...", () => {
    const getValue = () => 1;
    const soma = (a, b) => a + b;

    // pegando a função getValue e executando com cypress
    cy.wrap({ fn: getValue }).invoke("fn").should("be.equal", 1);

    // wrap pegou um objeto com uma função e colocou como atributo o fn
    // invoke chamou e executou essa função passando 5 e 5 como parâmetro
    // para a e b.
    cy.wrap({ fn: soma }).invoke("fn", 5, 5).should("be.equal", 10);

    // Vendo algumas outras funcionalidades
    cy.visit("https://wcaquino.me/cypress/componentes.html");
    cy.get("#formNome").invoke("val", "Texto via invoke"); // usando método do jquey para escrever no input
    cy.window().invoke("alert", "Dá pra ver?");
    cy.get("#resultado").invoke(
      "html",
      '<input type="button" value="hacked!">'
    ); // "rackeando" nossa página com invoke
  });
});
