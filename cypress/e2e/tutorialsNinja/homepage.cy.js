describe('Qafox.com Homepage Test Suite', () => {
    it('Qafox.com Homepage Test Case', () => {

        //1. Visit the demo website http://tutorialsninja.com/demo/index.php?route=common/home
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')

        //2. Make an assertion on the homepage URL (validate that we are on the homepage of the website)
        cy.url().should('eq', 'https://tutorialsninja.com/demo/index.php?route=common/home')

        //3. Verify that the main page heading is visible on the page and contains the text “Qafox.com”.
        cy.get('header').should('be.visible').contains('Qafox.com')

        //4. Verify that the page is displaying a visible search input field.
        cy.get('.input-lg').should('be.visible')

        //test
    })
})