const faker = require("faker"); 

it('ir para tela de cadastro', () => {
    cy.viewport(1920, 1080)
    cy.visit('http://automationpractice.com/index.php?')
    cy.get('.login').click()
})

it('cadastro de email', () => {
    const email = faker.internet.email()
    //inserindo o email
    cy.get('#email_create').type(email)
    
    //preenchendo os dados 
    cy.get('#SubmitCreate').click()
    cy.get('#customer_firstname').type('Teste')
    cy.get('#customer_lastname').type('Teste')
    cy.get('#passwd').type('Senha123')

    //preenchendo o endereco
    cy.get('#firstname').type('Teste')
    cy.get('#lastname').type('Teste')

    cy.get('#address1').type('Rua teste')
    cy.get('#city').type('Cidade teste')
    cy.get('#id_state').select('Alabama')
    cy.get('#postcode').type('08616')
    cy.get('#id_country').type('United States')
    cy.get('#phone_mobile').type('11999200100')
    cy.get('#alias').type('Teste')

    cy.get('#submitAccount').click()

})

it('validacao', () => {
    cy.get('.myaccount-link-list > :nth-child(4) > a > span').click()

})
it('login em branco', () => {
    cy.get('#passwd').type('senha123')
    cy.get('#SubmitLogin').click()

    cy.contains('.alert-danger', 'An email address required.').should('be.visible')
})

it('login com falha', () => {
    cy.get('#email').type('testeayhsdvgaydhv@gmail.com')
    cy.get('#passwd').type('senha123')
    cy.get('#SubmitLogin').click()

    cy.contains('.alert-danger', 'Authentication failed.').should('be.visible')
})

