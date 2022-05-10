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
    EXTRATO: "[data-test=menu-extrato]",
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
    FUNC_XP_BUSCA_ELEMENTO: (desc, value) =>
      `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`,
   
    FUN_XP_REMOVE_ELEMENTO: (conta)   => `//span[contains(.,'${conta}')]/../../..//a//i[@class='far fa-trash-alt']`
  },

  SALDO: {
    FUNC_XP_SALDO_CONTA: (conta) =>
      `//td[contains(.,'${conta}')]//following-sibling::td[contains(.,'100')]`,
  },

  MESSAGE: ".toast-message",
};
