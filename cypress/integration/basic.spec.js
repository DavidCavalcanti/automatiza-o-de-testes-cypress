/// <reference types="cypress"/>

/**
 * visita um site e verifica um título da aba da página
 */

describe("Cypress basics", () => {
  it("should visit a page and assert title", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    /**
     * Curiosidade: O cypress ele cria uma página externa e coloca a página de
     * teste de dentro dela, tendo assim todo o controle sobre a execução. Há
     * vantagens e desvantagens
     *
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
      .should("be.equal", "Campo de Treinamento")
      .and("contain", "Campo");
  });

  it("Should find and interact with an element", () => {
    cy.visit("https://wcaquino.me/cypress/componentes.html");

    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
