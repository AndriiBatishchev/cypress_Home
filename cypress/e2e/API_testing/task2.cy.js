// Завдання 2:

// Використовуючи підміну(intercepting), зробіть так, щоб при відкритті сторінки Profile ім'я користовуча змінювалось 
// з реального на Polar Bear. 
// Зробіть перевірку, що через UI відображається дійно змінене ім'я.

///<reference types="cypress" />


describe('API testing 2', () => {
    beforeEach(() => {
        const user = {
            "email": "test+testovich@gmail.com",
            "password": "1234567890aA",
        }

        cy.request('POST', '/api/auth/signin', user)
            .then((response) => {
                const token = response.headers["set-cookie"][0].split(';')[0];
                expect(typeof token).to.be.eq('string');
            })
    })

    it('Change Profiles Name', () => {
        const getProfile = {
            "status": "ok",
            "data": {
                "name": "Polar",
                "lastName": "Bear",
            }
        }
        cy.intercept('GET', '/api/users/profile', getProfile).as('getProfile');
        cy.visit('/panel/profile')
        cy.wait('@getProfile');
        cy.get('.profile_name.display-4').should('contain.text', 'Polar Bear');

    })
})