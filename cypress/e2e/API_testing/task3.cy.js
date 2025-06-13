// Завдання 3:
// Встановіть будь-який плагін для API тестів 
// Напишіть 3 будь-які API тести за допомогою методу плагіну
import 'cypress-plugin-api'
///<reference types="cypress" />


describe('API testing 3', () => {

    context('Garage Page', () => {
        let sid;
        let createdCarId;
        function findCarById(carsArray, id) {
            return carsArray.find(car => car.id === id);
        }

        before(() => {
            const user = {
                "email": "test+testovich@gmail.com",
                "password": "1234567890aA",
            }

            cy.request('POST', '/api/auth/signin', user)
                .then((response) => {
                    const token = response.headers["set-cookie"][0].split(';')[0];
                    expect(typeof token).to.be.eq('string');
                    sid = token;
                    Cypress.env('sid', sid);
                })
        })

        it('GET - /api/cars/models ', () => {

            cy.api('GET', '/api/cars/models').should((response) => {
                expect(response.status).to.be.eq(200);
                expect(response.body.data).to.have.length(23);
            })
        })

        it('POST - Add new car (/api/cars)', () => {
            const newCar = {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            }

            cy.api({
                method: 'POST',
                url: '/api/cars',
                body: newCar,
                headers: {
                    'Cookie': sid
                }
            })
                .then((response) => {
                    const body = response.body.data;
                    expect(response.status).to.be.eq(201);
                    expect(body.carBrandId).to.be.eq(newCar.carBrandId);
                    expect(body.carModelId).to.be.eq(newCar.carModelId);
                    expect(body.mileage).to.be.eq(newCar.mileage);
                    createdCarId = response.body.data.id;
                })
        });

        it('PUT - Update car mileage', () => {
            const updatedMileage = 232;
            cy.api({
                method: 'PUT',
                url: `/api/cars/${createdCarId}`,
                body: { mileage: updatedMileage },
                headers: {
                    'Cookie': Cypress.env('sid')
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.mileage).to.eq(updatedMileage);
            });
        });
    });
})
