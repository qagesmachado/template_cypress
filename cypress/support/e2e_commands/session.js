// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('login', function(novo_usuario) {
    cy.get('#menuUserLink').click()

    cy.get('input[name=username]').type(novo_usuario.username)
    cy.get('input[name=password]').type(novo_usuario.password)
    cy.get('#sign_in_btn').click()

})


