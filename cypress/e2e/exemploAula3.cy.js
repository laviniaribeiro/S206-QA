/// <reference = cypress>

describe("Testes da criação, registro o login", () => {
    it.skip("teste criacao de usuario com sucesso", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Lavinia")
        cy.get('#Text1').type("Amaral")
        cy.get('#username').type("Lavinia")
        cy.get('#password').type("Lavinia")
        cy.get('.btn-primary').click()
        cy.get('.ng-binding').should("contain.text", "Registration successful")
    })

    it.skip("teste criacao de usuario com falha", () => {
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('.btn-link').click()
        cy.get('#firstName').type("Lavinia")
        cy.get('#Text1').type("Amaral")
        cy.get('#username').type("Lavinia")
        cy.get('.btn-primary').should("be.disabled")
    })

    it.skip("teste de login com sucesso", () =>{
        let infos = criarUser()
        cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
        cy.get('#username').type(infos[0])
        cy.get('#password').type(infos[1])
        cy.get('.btn-primary').click()
        cy.get('h1.ng-binding').should("contain.text", infos[0])

    })

    it("delete user", () => {
        let infos = criarUser()
        cy.login(infos[0], infos[1])
        cy.get('.ng-binding > a').click()
        cy.get('.btn').click()
        cy.login(infos[0], infos[1])
        cy.get('.ng-binding').should("have.text", "Username or password is incorrect")
    })
})
function criarUser(){
    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let seg = new Date().getSeconds().toString()
    let ID = hora + minuto + seg + "ID"
    let senha = hora + minuto + seg + "senha"
    let infos = [ID, senha]

    cy.visit("https://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login")
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text", "Registration successful")
    return infos
}