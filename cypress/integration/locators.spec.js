/// <reference types="cypress"/>
// links de referência: 
// https://docs.cypress.io/api/cypress-api/selector-playground-api
// https://www.w3schools.com/jquery/jquery_ref_selectors.asp

describe("Work with basic elements", () => {
  before(() => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");
  });

  beforeEach(() => {
    cy.reload();
  });

  it("Using jquery selector", () => {
    cy.get(':nth-child(2) > :nth-child(6) > input');
  });
});
