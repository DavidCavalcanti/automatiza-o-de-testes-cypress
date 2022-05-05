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
});
