/// <reference types="cypress"/>

/**
 * visita um site e verifica um título da aba da página
 */

describe("Cypress basics", () => {
  it("should visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    /**
     * como ler: Espero que o título seja igual ao conteúdo 'Campo treinamento'
     * e que nele contenha o conteúdo 'Campo'
     */

    /*
        Uma forma de escrita:
        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        outra forma:
        cy.title()
            .should('be.equal', 'Campo de Treinamento');
            .and('contain', 'Campo');
        */

    // Melhor formato de escrita:
    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('contain', 'Campo');
  });
});
