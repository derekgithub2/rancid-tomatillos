describe('Current movie', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {fixture: 'movieDetails'})
        cy.visit('http://localhost:3000/436270')
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
          .and('include', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg')
    })

    it('should display the movie title and year', () => {
        cy.get('.title')
          .should('contain', 'Black Adam')
          .and('contain', '2022')
    })

    it('should display the genres and movie length', () => {
        cy.get('.movieDetails')
          .should('contain', 'Action')
          .should('contain', 'Fantasy')
          .should('contain', 'Science Fiction')
          .and('contain', '2h 5m')
    })

    it('should display a movie overview', () => {
        cy.get('.overview')
          .should('contain', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.')
    })

    it('should display the movie rating', () => {
        cy.get('.star-ratings')
          .should('be.visible')
    })

})