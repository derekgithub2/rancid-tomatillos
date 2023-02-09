describe('Current movie', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')

        cy.visit('http://localhost:3000')

    })

    

})