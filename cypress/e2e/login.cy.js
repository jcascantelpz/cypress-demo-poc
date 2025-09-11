describe('Login en SauceDemo con múltiples usuarios', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // Cargar datos
  const usuarios = require('../fixtures/usuarios.json')

  usuarios.forEach((usuario) => {
    it('Vamos a probar login con el usuario:' + usuario.username, () => {
      cy.get('#user-name').clear().type(usuario.username)
      cy.get('#password').clear().type(usuario.password)
      cy.get('#login-button').click()

      if (usuario.resultado === "exitoso") {
        cy.url().should('include', '/inventory.html')
        cy.contains('Products').should('be.visible')
      } else {
        cy.url().should('include', 'https://www.saucedemo.com/')
        cy.get('[data-test="error"]').should('be.visible')
      }
    })
  })
})