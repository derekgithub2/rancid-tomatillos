describe('Home page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies')

        cy.visit('http://localhost:3000')

    })

    it('should display a navigation bar with a list of genres', () => {
        cy.get('ul')
          .should('contain.text', 'Action')
          .should('contain.text', 'Drama')
          .get('li').should('have.length', 6)
    })

    it('should have a drop down menu with genres to sort by', () => {
        cy.get('.dropdown')
          .get('option').should('have.length', 7)
          .should('contain.text', 'Alphabetical')
          .should('contain.text', 'Movie Rating: High-Low')
          .should('not.have.text', 'Budget: High-Low')
          // come back to add happy/sad path for sorting functionality
    })

    it('should be able to change the drop down option', () => {
        cy.get('.dropdown')
        .should('have.value', 'alphabetical')
        .select('Revenue: High-Low')
        .should('have.value', 'revenue high-low')
    })

    it('should have a search bar and select input fields', () => {
        cy.get('form')
          .get('input[type="text"]')
          .get('input[placeholder="Search.."]')
          .type('Mulan')
          .should('have.value', 'Mulan')
    })

    it('should not be able to search if input field is empty', () => {
        // come back to write test when search functionality is implemented
    })

    it('should be able to filter movies based on the user input', () => {
        // come back to write test
    })

    it('should be able to open movie details when user clicks submit', () => {
        // return to write test when functionality built out
        // potential sad path when user types wrong movie name?
    })

    it('should display movies on the page', () => {

        cy.get('.movieContainer').children()
          .should('have.length', 40)
          .find('img')
    })

})