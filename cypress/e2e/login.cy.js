describe('Login en SauceDemo con múltiples usuarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // Cargar datos
  const usuarios = require('../fixtures/usuarios.json')

  usuarios.forEach((usuario) => {
    it(`Debería probar login con: ${usuario.username}`, () => {
      cy.get('#user-name').clear().type(usuario.username)
      cy.get('#password').clear().type(usuario.password)
      cy.get('#login-button').click()

      if (usuario.expected === "success") {
        cy.url().should('include', '/inventory.html')
        cy.contains('Products').should('be.visible')
      } else {
        cy.get('[data-test="error"]').should('be.visible')
      }
    })
  })
})