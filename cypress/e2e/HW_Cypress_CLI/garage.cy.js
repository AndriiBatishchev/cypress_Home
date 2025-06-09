/// <reference types="cypress" />
import HomePage from "../../pom/pages/HomePage";
import SignInForm from "../../pom/forms/SignInForm";
import GaragePage from "../../pom/pages/GaragePage";
import ExpenseForm from "../../pom/forms/ExpenseForm";
describe('SignIn with POM', () => {
    beforeEach(() => {
        HomePage.visit();
        HomePage.openSignForm();
        SignInForm.loginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
        cy.get('h1').should('have.text', 'Garage');

    });

    context('Add new Car', () => {
        it('Add Audi A6', () => {
            GaragePage.addNewCar('Audi', 'A6', '12');
            GaragePage.verifyLastAddedCar('Audi A6');
        });

        it('Add BMW 3', () => {
            GaragePage.addNewCar('BMW', '3', '34');
            GaragePage.verifyLastAddedCar('BMW 3');
        });

        it('Add Ford Mondeo', () => {
            GaragePage.addNewCar('Ford', 'Mondeo', '56');
            GaragePage.verifyLastAddedCar('Ford Mondeo');
        });

        it('Add Porsche Cayenne', () => {
            GaragePage.addNewCar('Porsche', 'Cayenne', '78');
            GaragePage.verifyLastAddedCar('Porsche Cayenne');
        });

        it('Add Fiat Panda', () => {
            GaragePage.addNewCar('Fiat', 'Panda', '90');
            GaragePage.verifyLastAddedCar('Fiat Panda');
        });
    });

    context('Remove Added Car', () => {
        it('Remove Car with Index', () => {
            GaragePage.removeCarByIndex(0);
            GaragePage.removeCarByIndex(0);
            GaragePage.removeCarByIndex(0);
            GaragePage.removeCarByIndex(0);
            GaragePage.removeCarByIndex(0);
        });
    });

    context('Change Fuel expenses', () => {
        it('Add Audi A6', () => {
            GaragePage.addNewCar('Audi', 'A6', '12');
            GaragePage.verifyLastAddedCar('Audi A6');
            ExpenseForm.visitFuel();
            ExpenseForm.addAnExpense('13', '12', '14');
        });
        it('Check Changed Value for Fuel expenses', () => {
            ExpenseForm.visitFuel();
            ExpenseForm.verifyExpense('08.06.2025', '1213', '12L', '14.00 USD');
        });
        it('Remove Fuel and Car', () => {
            ExpenseForm.visitFuel();
            ExpenseForm.removeFuelExpenses();
            cy.get('.panel-empty')
                .should('have.text', 'You don’t have any fuel expenses filed in')
            HomePage.visit();
            GaragePage.removeCarByIndex(0);
        });
    });
});