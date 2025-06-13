class ExpenseForm {
    get clickAddAnExpense() {
        return cy.get('div.panel-page_heading .btn-primary');
    }
    get clickAdd() {
        return cy.get('.modal-footer .btn.btn-primary');
    }
    get addVehicle() {
        return cy.get('#addExpenseCar');
    }

    get changeMileage() {
        return cy.get('#addExpenseMileage');
    }

    get addNumberOfLiters() {
        return cy.get('#addExpenseLiters');
    }

    get addTotalCost() {
        return cy.get('#addExpenseTotalCost');
    }


    visitFuel() {
        cy.visit('/panel/expenses');
    }
    addAnExpense(mileage, liters, total) {
        this.clickAddAnExpense.click();
        //this.addVehicle.select(brand);
        this.changeMileage.type(mileage);
        this.addNumberOfLiters.type(liters);
        this.addTotalCost.type(total);
        this.clickAdd.click();
    }

    verifyExpense(date, mileage, liters, cost) {
        cy.get('table.expenses_table tbody tr')
            .contains('td', mileage)
            .parent('tr')
            .within(() => {
                cy.get('td').eq(0).should('have.text', date);
                cy.get('td').eq(1).should('have.text', mileage);
                cy.get('td').eq(2).should('have.text', liters);
                cy.get('td').eq(3).should('have.text', cost);
            });
    }

    removeFuelExpenses() {
        cy.get('.btn.btn-delete').first().click({ force: true });
        cy.contains('button.btn-danger', 'Remove').click();
    }
}
export default new ExpenseForm();