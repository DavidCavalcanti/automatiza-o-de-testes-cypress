export const LOCATORS = {
  LOGIN: {
    USER: "[data-test=menu-settings]",
    PASSWORD: "[data-test=passwd]",
    BTN_LOGIN: ".btn",
  },

  MENU: {
    SETTINGS: "[data-test=menu-settings]",
    CONTAS: '[href="/contas"]',
  },

  CONTAS: {
    NOME: "[data-test=nome]",
    BTN_SALVAR: ".btn",
    XP_BTN_ALTERAR:
      "//table//td[contains(.,'Conta de Teste')]/..//i[@class='far fa-edit']",
  },

  MESSAGE: ".toast-message",
};
