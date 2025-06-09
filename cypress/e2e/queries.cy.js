/// <reference types="cypress" />

describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('/')
        // cy.visit('https://qauto.forstudy.space', {
        //     auth: {
        //         username: 'guest',
        //         password: 'welcome2qauto',
        // //     },
        // });
    });

    it('Check <About> tab', () => {
        // cy.contains('About').click();
        cy.get('button.header-link[appscrollto="aboutSection"]').click();
        cy.get('#aboutSection').should('be.visible');
    });

    it('Check <Contacts> tab', () => {
        // cy.contains('About').click();
        cy.get('button.header-link[appscrollto="contactsSection"]').click();
        cy.get('#contactsSection').should('be.visible');
    });

    it('Check [Guest log in] button', () => {
        cy.get('.header_inner.d-flex.justify-content-between.align-items-center button.header-link.-guest').should('have.text', 'Guest log in');
    });

    it('Check the Number of Social Networks', () => {
        cy.get('.contacts_socials.socials').should('be.visible');
        cy.get('.socials_link').its('length').should('eq', 5);
    });

    it('Check [Sign Up] popup', () => {
        cy.get('.hero-descriptor_btn.btn.btn-primary').as('signUpButton');
        cy.get('@signUpButton').click();
        cy.get('@signUpButton').should('be.visible');
        cy.get('@signUpButton').should('have.text', 'Sign up');

        cy.wait(3000); //Wait 3sec
        //Check Opening popup
        cy.get('.modal-content').should('be.visible');
        //Check [Close] button
        cy.get('.close').should('exist');
        //Check [Register] button
        cy.get('.btn.btn-primary').should('exist');

        //Registration
        cy.get('.modal-title')
            .should('be.visible')
            .and('have.text', 'Registration');
        //cy.get('.modal-title').should('be.visible');

        //Name
        //НЕ ПРАЦЮЄ, оскільки в КОДІ for="signupEmail", но всередині написано Name
        // cy.get('[for="signupEmail"]')
        //     .should('exist')
        //     .and('have.text', 'Name');
        cy.contains('label', 'Name').should('exist');
        cy.get('#signupName').should('be.visible');

        //LastName
        cy.contains('label', 'Last name').should('exist');
        cy.get('#signupLastName').should('be.visible');

        //Email
        cy.contains('label', 'Email').should('exist');
        cy.get('#signupEmail').should('be.visible');

        //Password
        cy.contains('label', 'Password').should('exist');
        cy.get('#signupPassword').should('be.visible');

        //Re-enter password
        cy.contains('label', 'Re-enter password').should('exist');
        cy.get('#signupRepeatPassword').should('be.visible');

        //Close the popup
        cy.get('.close').click();
        cy.get('.modal-content').should('not.exist');
    });

    it('Check [Sign In] popup', () => {
        cy.get('.btn.btn-outline-white.header_signin').as('signInButton');
        cy.get('@signInButton').click();
        cy.get('@signInButton').should('be.visible');
        cy.get('@signInButton').should('have.text', 'Sign In');

        cy.wait(3000); //Wait 3sec
        //Check Opening popup
        cy.get('.modal-content').should('be.visible');
        //Check [Close] button
        cy.get('.close').should('exist');
        //Check [Login] button
        cy.get('.btn.btn-primary').should('exist');

        //Log in
        cy.get('.modal-title')
            .should('be.visible')
            .and('have.text', 'Log in');

        //Email
        cy.contains('label', 'Email').should('exist');
        cy.get('#signinEmail').should('be.visible');

        //Password
        cy.contains('label', 'Password').should('exist');
        cy.get('#signinPassword').should('be.visible');

        //LastName
        cy.contains('label', 'Email').should('exist');
        cy.get('#signinEmail').should('be.visible');

        //Remember
        cy.get('#remember').should('be.visible');
        cy.get('.form-check-label').should('exist')
            .and('not.be.checked');
        cy.get('.form-check-label').should('be.visible');
        cy.get('.form-check-label').should('have.text', ' Remember me ');

        //Forgot password
        cy.get('.form-group.d-flex.align-items-center.justify-content-between button.btn.btn-link')
            .should('exist')
            .and('have.text', 'Forgot password');

        //Registration
        cy.get('.modal-footer.d-flex.justify-content-between button.btn.btn-link')
            .should('exist')
            .and('have.text', 'Registration');

        //Close the popup
        cy.get('.close').click();
        cy.get('.modal-content').should('not.exist');

    });

    it('Check footer', () => {
        cy.get('.footer.d-flex.align-items-center').should('be.visible');

        cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p').eq(0)
            .should('have.text', '© 2021 Hillel IT school');

        cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p').eq(1)
            .should('have.text', 'Hillel auto developed in Hillel IT school for educational purposes of QA courses.');

        cy.get('.footer_item')
            .find('svg')
            .should('have.attr', 'xmlns', 'http://www.w3.org/2000/svg');

        cy.get('.footer_logo')
            .should('exist', 'https://qauto.forstudy.space/');     
        
        cy.get ('.footer_logo').click();
        cy.url().should('eq', 'https://qauto.forstudy.space/');




    });
});
