class GaragePage {
    get addNewCarButton() {
        return cy.get('div.panel-page_heading .btn-primary');
    }
    get brandDropDown() {
        return cy.get('#addCarBrand');
    }

    get modelDropDown() {
        return cy.get('#addCarModel');
    }

    get mileageField() {
        return cy.get('#addCarMileage');
    }

    get submitAddingFormButton() {
        return cy.get('app-add-car-modal .btn-primary');
    }

    get addNewCarFormHeader() {
        return cy.get('.modal-header');
    }

    get addedCarNames() {
        return cy.get('p.car_name')
    }

    visitFuel() {
        cy.visit('/panel/expenses');
    }
    addNewCar(brand, model, mileage) {
        this.addNewCarButton.click();
        this.brandDropDown.select(brand);
        this.modelDropDown.select(model);
        this.mileageField.type(mileage);
        this.submitAddingFormButton.click();
    }
    verifyLastAddedCar(carName) {
        this.addedCarNames.first().should('have.text', carName);
    }
    removeCarByIndex(index) {
        cy.get('.car').eq(index).within(() => {
            cy.get('.icon.icon-edit').click();
        });
        cy.get('.btn.btn-outline-danger').click();
        cy.contains('button.btn-danger', 'Remove').click();
    }
}

export default new GaragePage();