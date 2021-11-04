/// <reference types="cypress" />

describe('Code test', () => {
  it('Adicionar uma nova entrada', () => {
    cy.visit('https://devfinance-agilizei.netlify.app/#')
    //get & contains

    //Adicionando Entrada
    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Salario')
    cy.get('#amount').type('4500')
    cy.get('#date').type('2021-11-03')
    cy.contains('button', 'Salvar').click()

    //Adicionando Saida
    cy.get('a[onclick*=open]').click()
    cy.get('#description').type('Monitor')
    cy.get('#amount').type('-1600')
    cy.get('#date').type('2021-11-03')
    cy.contains('button', 'Salvar').click()

    //Validacao
    cy.get('table tbody tr').should('have.length', 2)

    //Removendo Saida Monitor
    cy.get('td.description')
      .contains('Monitor')
      .parent()
      .find('img[onclick*=remove]')
      .click()

      //Validacao
      cy.get('table tbody tr').should('have.length', 1)
  });
});
