describe('Kitchen Sink Test Suite', () => {
    it('Kitchen Sink Test Case', () => {

        cy.visit('https://example.cypress.io/')

        cy.contains('type').click()
        cy.url().should('eq', 'https://example.cypress.io/commands/actions')

        cy.get('.action-email').type('fake@email.com')
        cy.get('.action-email').should('have.value', 'fake@email.com')

    })
})