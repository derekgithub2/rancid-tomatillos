describe('Home page', () => {
    beforeEach(() => {
        cy.visit('/')
        // can add '/ideas' if thats the url extension 
    })

    it('should display a navigation bar with a list of genres', () => {
        // cy.visit('/')
        cy.get('ul')
          .contains('Action')
          .contains('Comedy')
          .contains('Drama')
          .contains('Family')
          .contains('Horror')
          .contains('Thriller')
    })
})