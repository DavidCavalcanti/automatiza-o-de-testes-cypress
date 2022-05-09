import { LOCATORS as loc } from "./locators";

Cypress.Commands.add("resetApp", () => {
  cy.get(loc.MENU.SETTINGS).click();
  cy.get(loc.MENU.RESET).click();
});
