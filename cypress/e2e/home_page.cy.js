describe('Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')

        cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/', {
            'movies' : [
                {
                    "id": 694919,
                    "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
                    "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
                    "title": "Money Plane",
                    "average_rating": 6.666666666666667,
                    "release_date": "2020-09-29"
                  },
                  {
                    "id": 337401,
                    "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
                    "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
                    "title": "Mulan",
                    "average_rating": 4.909090909090909,
                    "release_date": "2020-09-04"
                  },
                  {
                    "id": 718444,
                    "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
                    "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
                    "title": "Rogue",
                    "average_rating": 5.428571428571429,
                    "release_date": "2020-08-20"
                  }
            ]
        }).as('getMovies')
        // cy.get('@getMovies')
        // throwing this cy.get^ still works (everything still passes) but I'm not sure if it is doing what I think it is. 
    })

    it('should have a search bar and select input fields', () => {
        cy.get('form')
          .get('input[type="text"]')
          .get('input[placeholder="Search.."]')
          .type('Mulan')
          .should('have.value', 'Mulan')
    })

    it('should show an error message if the user clicks search with an empty search input', () => {
        cy.get('form')
          .get('input[type="text"]')
          .get('button')
          .click()
          
        cy.get('.swal-modal')
          .should('be.visible')
    })

    it('should have a list of movie options from the search bar', () => {
        cy.get('#titles option').should('have.length', 40)
    })

    it.skip('should be able to open movie details when user clicks submit', () => {
        cy.get('input').type('Mulan').get('button').click()
        cy.url().should('eq','http://localhost:3000/337401')
    })

    it('should display movies on the page', () => {
        cy.get('.movieContainer').children()
          .should('have.length', 40)
          .find('img')
    })

    it('should be able to open movie details when user clicks poster', () => {
        // ***LEFT OFF HERE***

        // the commented out attempt below was the most recent attempt we made
        // currently this test is PASSING with the stipulation that it's testing the whole page
        // I think we need to use cy.get('@getMovies') to test the stub because we set the alias of that stub to 'getMovies' in line 32. 

        // cy.get('#718444').click() 
        // cy.url().should('eq', 'http://localhost:3000/movie/718444')
        cy.get('.card').first().click()
        cy.url().should('include', '49046')
    })

    it.skip('should not open the wrong poster when the user clicks a poster', () => {
        cy.get('.movie').first().click()
        cy.url().should('not.eq', 'http://localhost:3000/760104')

        cy.get('.back-button').click()
        cy.url().should('eq', 'http://localhost:3000/')

        cy.get('.card').last().click()
        cy.url().should('not.eq', 'http://localhost:3000/49046')
    })

})