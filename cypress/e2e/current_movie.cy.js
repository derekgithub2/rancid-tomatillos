describe('Current movie', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')
        cy.visit('http://localhost:3000/49046')
    })

    it('should have the correct URL', () => {
        cy.url()
          .should('not.eq', 'http://localhost:3000/')
    })

    it('should have a back button', () => {
        cy.get('.back-button')
          .should('be.visible')
    })

    it('should go back to the home page when the user clicks the back button', () => {
        cy.get('.back-button')
          .click()

        cy.url()
          .should('eq', 'http://localhost:3000/')
    })

    it('should display the movie backdrop', () => {
        cy.get('.current-movie')
          .should('have.css', 'background-image')
          .and('include', 'https://image.tmdb.org/t/p/original//mqsPyyeDCBAghXyjbw4TfEYwljw.jpg')
    })

    it('should display the movie title and year', () => {
        cy.get('.title')
          .should('contain', 'All Quiet on the Western Front')
          .and('contain', '2022')
    })

    it('should display the genres and movie length', () => {
        cy.get('.movieDetails')
          .should('contain', 'War')
          .should('contain', 'Drama')
          .should('contain', 'Action')
          .and('contain', '2h 27m')
    })

    it('should display a movie overview', () => {
        cy.get('.overview')
          .should('contain', 'Paul Baumer and his friends Albert and Muller, egged on by romantic dreams of heroism, voluntarily enlist in the German army. Full of excitement and patriotic fervour, the boys enthusiastically march into a war they believe in. But once on the Western Front, they discover the soul-destroying horror of World War I.')
    })

    it('should display the movie rating, budget and revenue', () => {
        cy.get('.left-section')
          .should('contain', 'Rating: ')
          .and('contain', '8.00')

          .should('contain', 'Budget: ')
          .and('contain', '0.00')

          .should('contain', 'Revenue: ')
          .and('contain', '0.00')
    })

})