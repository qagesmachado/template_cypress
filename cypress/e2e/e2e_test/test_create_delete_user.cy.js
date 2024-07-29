/// <reference types="cypress" />
const novo_usuario = {username: "qa_test", password: "Test123!", email: "qa_test@qatest.com"}

describe('Criação e Exclusão de usuário', () => {

    beforeEach(() => {
        cy.visit("https://www.advantageonlineshopping.com/#/")
    });

    it('Criar usuário', () => {
        cy.create_user(novo_usuario)
    });

    it('Deletar usuário', () => {
        cy.login(novo_usuario)
        cy.delete_user(novo_usuario)
    });
 
})
