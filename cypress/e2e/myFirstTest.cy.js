describe('Kitchen Sink Test Suite', () => {
    it('Kitchen Sink Test Case', () => {

        cy.visit('https://example.cypress.io/')

        cy.contains('type').click()
        cy.url().should('eq', 'https://example.cypress.io/commands/actions')

        cy.get('.action-email').type('ffake@email.com')
        cy.get('.action-email').should('have.value', 'ffake@email.com')

        cy.get('.action-focus').focus().type('testPassworn')

    })
})