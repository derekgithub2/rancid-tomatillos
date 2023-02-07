describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
        // can add '/ideas' if thats the url extension 
    })

    it('should display a navigation bar and a grid of movies', () => {
        cy.get('nav')
    })
})