/// <reference types="cypress" />

describe('Task 1-4', () => {
    //generate email
    const email = `test+testovich${Date.now()}@gmail.com`
    beforeEach(() => {
        cy.visit('/')
        cy.get('.hero-descriptor_btn.btn.btn-primary').as('signUpButton');
        cy.get('@signUpButton').should('be.visible');
        cy.get('@signUpButton').should('have.text', 'Sign up');
        cy.get('@signUpButton').click();
        //cy.wait(3000); //Wait 3sec
        //Check Opening popup
        cy.get('.modal-content').should('be.visible');
    });

    context('Registration', () => {
        it('Check "Registration" text', () => {
            //Registration
            cy.get('.modal-title')
                .should('be.visible')
                .and('have.text', 'Registration');
        });
    });

    context('"Name"', () => {
        it('Check "Name" field> Name required', () => {
            cy.contains('label', 'Name').should('exist');
            cy.get('#signupName')
                .should('be.visible')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name required')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Name" field> Name is invalid', () => {
            //number
            cy.log('number');
            cy.contains('label', 'Name').should('exist');
            cy.get('#signupName').type('12')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //diacritic marks
            cy.log('diacritic marks');
            cy.get('#signupName')
                .clear()
                .type('!@')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Space
            cy.log('Space');
            cy.get('#signupName')
                .clear()
                .type('  ')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Not English
            cy.log('Not English');
            cy.get('#signupName')
                .clear()
                .type('Тест')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Name" field> Name has to be from 2 to 20 characters long', () => {
            cy.log('<1');
            cy.contains('label', 'Name').should('exist');
            cy.get('#signupName').type('d')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name has to be from 2 to 20 characters long')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');

            cy.log('>20');
            cy.contains('label', 'Name').should('exist');
            cy.get('#signupName')
                .type('Thequickbrownfoxjumpedover')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Name has to be from 2 to 20 characters long')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Name" field> Valid value', () => {
            cy.contains('label', 'Name').should('exist');
            cy.get('#signupName')
                .type('Sergio')
                .blur()
                .should('not.have.class', 'is-invalid')
                .should('have.value', 'Sergio');
        });
    });

    context('"Last Name"', () => {
        it('Check "Last Name" field> Last name required', () => {
            cy.contains('label', 'Last name').should('exist');
            cy.get('#signupLastName')
                .should('be.visible')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name required')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Last Name" field> Last name is invalid', () => {
            //number
            cy.log('number');
            cy.contains('label', 'Last name').should('exist');
            cy.get('#signupLastName').type('12')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //diacritic marks
            cy.log('diacritic marks');
            cy.get('#signupLastName')
                .clear()
                .type('!@')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Space
            cy.log('Space');
            cy.get('#signupLastName')
                .clear()
                .type('  ')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Not English
            cy.log('Not English');
            cy.get('#signupLastName')
                .clear()
                .type('Тест')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name is invalid')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Last Name" field> Name has to be from 2 to 20 characters long', () => {
            cy.log('<1');
            cy.contains('label', 'Last name').should('exist');
            cy.get('#signupLastName')
                .type('d')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name has to be from 2 to 20 characters long')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');

            cy.log('>20');
            cy.contains('label', 'Last name').should('exist');
            cy.get('#signupLastName')
                .type('Thequickbrownfoxjumpedover')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Last name has to be from 2 to 20 characters long')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupLastName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Last Name" field> Valid value', () => {
            cy.contains('label', 'Last name').should('exist');
            cy.get('#signupLastName')
                .type('Smith')
                .blur()
                .should('not.have.class', 'is-invalid')
                .should('have.value', 'Smith');
        });
    });

    context('"Email"', () => {
        it('Check "Email" field> Last name required', () => {
            cy.contains('label', 'Email').should('exist');
            cy.get('#signupEmail')
                .should('be.visible')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email required')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Email" field> Email is incorrect', () => {
            //number
            cy.log('number');
            cy.contains('label', 'Email').should('exist');
            cy.get('#signupEmail').type('123456')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Missing username
            cy.log('Missing username');
            cy.get('#signupEmail')
                .clear()
                .type('@gmail.com')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Missing domain name after the @ symbol
            cy.log('Missing domain name after the @ symbol');
            cy.get('#signupEmail')
                .clear()
                .type('user.name@.com')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Invalid domain
            cy.log('Invalid domain');
            cy.get('#signupEmail')
                .clear()
                .type('user.name@gmail')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Space
            cy.log('Space');
            cy.get('#signupEmail')
                .clear()
                .type('  ')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Contains a space in the username
            cy.log('Contains a space in the username');
            cy.get('#signupEmail')
                .clear()
                .type('user name@gmail.com')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Double dot in the domain part.
            cy.log('Double dot in the domain part.');
            cy.get('#signupEmail')
                .clear()
                .type('user.name@gmail..com')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Comma instead of dot in the domain part
            cy.log('Comma instead of dot in the domain part');
            cy.get('#signupEmail')
                .clear()
                .type('user.name@gmail,com')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Domain name is too short.
            cy.log('Domain name is too short');
            cy.get('#signupEmail')
                .clear()
                .type('user.name@gmail.c')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Email is incorrect')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Email" field> Valid value', () => {
            cy.contains('label', 'Email').should('exist');
            cy.get('#signupEmail')
                .type(email)
                .blur()
                .should('not.have.class', 'is-invalid')
                .should('have.value', email);
        });
    });

    context('"Password"', () => {
        it('Check "Password" field> Password required', () => {
            cy.contains('label', 'Password').should('exist');
            cy.get('#signupPassword')
                .should('be.visible')
                .focus()
                .blur()
            cy.get('.invalid-feedback')
                .should('have.text', 'Password required')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Password" field> Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter', () => {
            //<8 symbols
            cy.log('<8 symbols');
            cy.contains('label', 'Password').should('exist');
            cy.get('#signupPassword').type('12aA')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //>15 symbols
            cy.log('>15 symbols');
            cy.get('#signupPassword')
                .clear()
                .type('12345678901234aA')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Only number
            cy.log('Only number');
            cy.get('#signupPassword')
                .clear()
                .type('123456789')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Without number
            cy.log('Space');
            cy.get('#signupPassword')
                .clear()
                .type('aAaAaAaA')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Without small
            cy.log('Without small');
            cy.get('#signupPassword')
                .clear()
                .type('1234567890A')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
            //Without capital
            cy.log('Without capital');
            cy.get('#signupPassword')
                .clear()
                .type('1234567890a')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Password" field> Valid value', () => {
            cy.contains('label', 'Password').should('exist');
            cy.get('#signupPassword')
                .type('1234567890aA')
                .blur()
                .should('not.have.class', 'is-invalid')
                .should('have.value', '1234567890aA');
        });
    });

    context('"Re-enter password"', () => {
        it('Check "Re-enter password" field> Re-enter password required', () => {
            cy.contains('label', 'Re-enter password').should('exist');
            cy.get('#signupRepeatPassword')
                .should('be.visible')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Re-enter password required')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Re-enter password" field> Passwords do not match', () => {
            cy.contains('label', 'Password').should('exist');
            cy.contains('label', 'Re-enter password').should('exist');
            cy.get('#signupPassword')
                .should('be.visible')
                .type('1234567890aA');
            cy.get('#signupRepeatPassword')
                .should('be.visible')
                .type('1234567890aZ')
                .focus()
                .blur();
            cy.get('.invalid-feedback')
                .should('have.text', 'Passwords do not match')
                .should('have.css', 'color', 'rgb(220, 53, 69)');
            cy.get('#signupRepeatPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
        });

        it('Check "Re-enter password" field> Valid value', () => {
            cy.get('#signupPassword').type('1234567890aA');
            cy.get('#signupRepeatPassword')
                .type('1234567890aA')
                .blur()
                .should('not.have.class', 'is-invalid')
                .should('have.value', '1234567890aA');
        });
    });

    context('Popup "Registration"', () => {
        it('Check [Close] button + disabled [Registration] button', () => {
            //Check [Close] button
            cy.get('.close').should('exist');
            //Check [Register] button
            cy.get('button.btn.btn-primary[disabled]').should('exist')
            //Close the popup
            cy.get('.close').click();
            cy.get('.modal-content').should('not.exist');
            //Check Opening popup
        });

        it('Check [Registration] button when fields are not filled in', () => {
            //Without Name
            cy.get('#signupLastName').type('Testovich');
            cy.get('#signupEmail').type(email);
            cy.get('#signupPassword').type('1234567890aA');
            cy.get('#signupRepeatPassword').type('1234567890aA');
            //cy.get('button.btn.btn-primary[disabled]').should('exist');
            cy.get('.modal-footer .btn.btn-primary')
                .should('be.disabled')
            //Without Last Name
            cy.get('#signupName')
                .clear()
                .type('Test');
            cy.get('#signupLastName').clear();
            cy.get('#signupEmail')
                .clear()
                .type(email);
            cy.get('#signupPassword')
                .clear()
                .type('1234567890aA');
            cy.get('#signupRepeatPassword')
                .clear()
                .type('1234567890aA');
            //cy.get('button.btn.btn-primary[disabled]').should('exist');
            cy.get('.modal-footer .btn.btn-primary')
                .should('be.disabled')
            //Without Email
            cy.get('#signupName')
                .clear()
                .type('Test');
            cy.get('#signupLastName')
                .clear()
                .type('Testovich');
            cy.get('#signupEmail').clear();
            cy.get('#signupPassword')
                .clear()
                .type('1234567890aA');
            cy.get('#signupRepeatPassword')
                .clear()
                .type('1234567890aA');
            //cy.get('button.btn.btn-primary[disabled]').should('exist');
            cy.get('.modal-footer .btn.btn-primary')
                .should('be.disabled')
            // Without Password
            cy.get('#signupName')
                .clear()
                .type('Test');
            cy.get('#signupLastName')
                .clear()
                .type('Testovich');
            cy.get('#signupEmail')
                .clear()
                .type(email);
            cy.get('#signupPassword').clear();
            cy.get('#signupRepeatPassword')
                .clear()
                .type('1234567890aA');
            //cy.get('button.btn.btn-primary[disabled]').should('exist');
            cy.get('.modal-footer .btn.btn-primary')
                .should('be.disabled')
            // Without Re-enter password
            cy.get('#signupName')
                .clear()
                .type('Test');
            cy.get('#signupLastName')
                .clear()
                .type('Testovich');
            cy.get('#signupEmail')
                .clear()
                .type(email);
            cy.get('#signupPassword')
                .clear()
                .type('1234567890aA');
            cy.get('#signupRepeatPassword').clear();
            //cy.get('button.btn.btn-primary[disabled]').should('exist');
            cy.get('.modal-footer .btn.btn-primary')
                .should('be.disabled')
        });

        it('Successful registration', () => {
            cy.get('#signupName').type('Test');
            cy.get('#signupLastName').type('Testovich');
            cy.get('#signupEmail').type(email);
            cy.get('#signupPassword').type('1234567890aA');
            cy.get('#signupRepeatPassword').type('1234567890aA');
            cy.get('.modal-footer .btn.btn-primary')
                .should('not.be.disabled')
                .click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
    });
});

describe('Task4', () => {
    //generate email
    const email = `test+testovich${Date.now()}@gmail.com`
    beforeEach(() => {
        cy.visit('/')
        cy.get('.hero-descriptor_btn.btn.btn-primary').as('signUpButton');
        cy.get('@signUpButton').should('be.visible');
        cy.get('@signUpButton').should('have.text', 'Sign up');
        cy.get('@signUpButton').click();
        //cy.wait(3000); //Wait 3sec
        //Check Opening popup
        cy.get('.modal-content').should('be.visible');
    });
    context('Registration + custom command "Login"', () => {
        it('Successful registration', () => {
            cy.get('#signupName').type('Test');
            cy.get('#signupLastName').type('Testovich');
            cy.get('#signupEmail').type(email);
            cy.get('#signupPassword').type('1234567890aA');
            cy.get('#signupRepeatPassword').type('1234567890aA');
            cy.get('.modal-footer .btn.btn-primary')
                .should('not.be.disabled')
                .click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });

        //Task 4
        it('custom command "Login"', () => {
            cy.login(email, '1234567890aA');
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
    });
});


describe('Task5', () => {
    const email = `test+testovich@gmail.com`
    const password = '1234567890aA';
    beforeEach(() => {
        cy.visit('/')
        cy.get('.btn.btn-outline-white.header_signin').as('signInButton');
        cy.get('@signInButton').click();
        //Check Opening popup
        cy.get('.modal-content').should('be.visible');
    });
    //Task 5
    context('"Login with hidden password"', () => {
        it('Login with ', () => {
            cy.get('#signinEmail').type(email);
            cy.get('#signinPassword').type(password, { sensitive: true });
            cy.get('.modal-footer .btn.btn-primary')
                .should('not.be.disabled')
                .click();
            cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
        });
    });
});
