// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('cadastrar_usuario', function(body) {
    cy.request({
        url:'https://serverest.dev/usuarios',
        method: 'POST',
        body: body
    }).then(response =>{

        // Logar response
        console.log(response)
        console.log('User ID: '+response.body._id)

        // Validações
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        
        // Criação de variáveis
        Cypress.env('user_id',response.body._id)
    })
})

Cypress.Commands.add('buscar_usuario', function(novo_usuario) {
    cy.request({
        url:`https://serverest.dev/usuarios/${Cypress.env('user_id')}`,
        method: 'GET'
    }).then(response =>{

        // Logar response
        console.log(response)
        console.log('User ID  LEITURA: '+response.body._id)

        // Validações
        expect(response.status).to.eq(200)
        expect(response.body.nome).to.eq(novo_usuario.nome)
        expect(response.body.email).to.eq(novo_usuario.email)
        expect(response.body.password).to.eq(novo_usuario.password)
        expect(response.body.administrador).to.eq(novo_usuario.administrador)
        expect(response.body._id).to.eq(Cypress.env('user_id'))
    })
})

Cypress.Commands.add('atualizar_usuario', function(atualiza_usuario) {
    cy.request({
        url:`https://serverest.dev/usuarios/${Cypress.env('user_id')}`,
        method: 'PUT',
        body: atualiza_usuario
    }).then(response =>{

        // Logar response
        console.log(response)

        // Validações
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq("Registro alterado com sucesso")
    })
})

Cypress.Commands.add('apagar_usuario', function() {
    cy.request({
        url:`https://serverest.dev/usuarios/${Cypress.env('user_id')}`,
        method: 'DELETE',

    }).then(response =>{

        // Logar response
        console.log(response)

        // Validações
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq("Registro excluído com sucesso")
        
    })
})