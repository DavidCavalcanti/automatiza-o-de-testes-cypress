/// <reference types="cypress"/>

import "../../support/commandMovimentacao";

describe("should test at a functional level", () => {
  before(() => {});

  beforeEach(() => {
    //cy.resetApp();
  });

  it("Should create an count", () => {
    cy.request({ // método para fazer requisições à API
      method: "POST",
      url: "https://barrigarest.wcaquino.me/signin",
      body: {
        email: "a@a",
        redirecionar: false,
        senha: "a"
      },
    }).its('body.token').should("not.be.empty");
  });

  it("Should update an account", () => {});

  it("Should not create an account with same name", () => {});

  it("Should create a transaction", () => {});

  it("Should get balance", () => {});

  it("Should remove a transaction", () => {});
});
