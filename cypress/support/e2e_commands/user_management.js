// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('create_user', function(novo_usuario) {
    cy.get('#menuUserLink').click()
    cy.get('.create-new-account').click()

    cy.get('input[name=usernameRegisterPage]').type(novo_usuario.username)
    cy.get('input[name=emailRegisterPage]').type(novo_usuario.email)
    cy.get('input[name=passwordRegisterPage]').type(novo_usuario.password)
    cy.get('input[name=confirm_passwordRegisterPage]').type(novo_usuario.password, {force: true})

    cy.get('input[name=i_agree]').check()
    cy.get('#register_btn').click()
})

Cypress.Commands.add('delete_user', function() {
    cy.get('#menuUserLink').click()
    cy.contains('label','My account').click({force: true})

    cy.get('.deleteBtnText').click()
    cy.get('.deleteRed').click()

    cy.contains('Account deleted successfully').should('have.text', "Account deleted successfully")
})

