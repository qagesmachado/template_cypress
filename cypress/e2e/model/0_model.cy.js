/// <reference types="cypress" />

describe('Descrição', () => {

    beforeEach('Antes de cada um', () => {
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
        cy.log('Antes de cada um')
    });

    before('Antes', () => {
        cy.log('Antes')
    });

    afterEach('Depois de cada um', () => {
        cy.log('Depois de cada um')
    });

    after('Depois', () => {
        cy.log('Depois')
    });

    it('Teste', () => {
        cy.visit('https://www.amazon.com.br/')
    });

    it('Teste 1', () => {
        cy.visit('https://www.amazon.com.br/')
    });

    it('Teste 2', () => {
        cy.visit('https://www.amazon.com.br/')
    });
    
})
