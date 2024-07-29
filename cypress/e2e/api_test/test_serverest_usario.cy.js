/// <reference types="cypress" />

const novo_usuario = require('../../fixtures/novo_usuario.json')
const atualiza_usuario = require('../../fixtures/atualiza_usuario.json')

describe('Testes API de USUÁRIO', () => {

    context('CENÁRIO 1: FAZER CRUD DA API DE USUÁRIO COM SUCESSO', () => {
        it.only('1.1: CRIAR USUÁRIO', () => {
            cy.cadastrar_usuario(novo_usuario)
        });

        it.only('5.2: LER USUÁRIO', () => {
            cy.buscar_usuario(novo_usuario)
        });

        it.only('5.3: ATUALIZAR USUÁRIO', () => {
            cy.atualizar_usuario(atualiza_usuario)
        });

        it.only('5.4: LER USUÁRIO ATUALIZADO', () => {
            cy.buscar_usuario(atualiza_usuario)
        });
    
        it.only('5.5: APAGA USUÁRIO', () => {
            cy.apagar_usuario()
        });
    })
})