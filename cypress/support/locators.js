export const LOCATORS = {
  LOGIN: {
    USER: "[data-test=email]",
    PASSWORD: "[data-test=passwd]",
    BTN_LOGIN: ".btn",
  },

  MENU: {
    HOME: "[data-test=menu-home]",
    SETTINGS: "[data-test=menu-settings]",
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]',
    MOVIMENTACAO: "[data-test=menu-movimentacao]",
  },

  CONTAS: {
    NOME: "[data-test=nome]",
    BTN_SALVAR: ".btn",
    XP_BTN_ALTERAR:
      "//table//td[contains(.,'Conta de Teste')]/..//i[@class='far fa-edit']",
  },

  MOVIMENTACAO: {
    DESCRICAO: "[data-test=descricao]",
    VALOR: "[data-test=valor]",
    CONTA: "[data-test=conta]",
    INTERESSADO: "[data-test=envolvido]",
    STATUS: "[data-test=status]",
    BTN_SALVAR: ".btn-primary",
  },

  EXTRATO: {
    XP_BUSCA_ELEMENTO:
      "//span[contains(., 'Descrição')]/following-sibling::small[contains(., '100')]",
  },

  SALDO: {
    XP_SALDO_CONTA:
      "//td[contains(.,'Conta alterada')]//following-sibling::td[contains(.,'100,00')]",
  },

  MESSAGE: ".toast-message",
};
