///Завдання 1:

// Напишіть мінімум 5 будь-яких API тестів на одну із сторінок сайту(Garage, Fuel Expenses, Instructions, User Sign Up/Sign In). 
// Тести повинні робити GET/POST/PUT/DELETE запити та перевіряти відповідь

///<reference types="cypress" />


describe('API testing1', () => {

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


        it('POST - Login as a user', () => {
            const user = {
                "email": "test+testovich@gmail.com",
                "password": "1234567890aA",
            }

            cy.request('POST', '/api/auth/signin', user)
                .then((response) => {
                    expect(response.status).to.be.eq(200);
                })
        });

        it('POST - Add new car', () => {
            cy.log(sid);
            const newCar = {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            }

            cy.request({
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

        it('GET -  Check Added car in Garage', () => {
            cy.request({
                method: 'GET',
                url: '/api/cars',
                headers: {
                    'Cookie': Cypress.env('sid')
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data).to.be.an('array');
                const car = response.body.data.find(car => car.id === createdCarId);
                expect(car.carBrandId).to.eq(1);
                expect(car.carModelId).to.eq(1);
                expect(car.mileage).to.eq(122);
            });
        });

        it('PUT - Update car mileage', () => {
            const updatedMileage = 200;
            cy.request({
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

        it('GET - Car was updated', () => {
            cy.request({
                method: 'GET',
                url: '/api/cars',
                headers: {
                    'Cookie': Cypress.env('sid')
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                const car = findCarById(response.body.data, createdCarId);
                expect(car).to.not.be.undefined;
                expect(car.mileage).to.eq(200);
            });
        });

        it('DELETE -  Car', () => {
            cy.request({
                method: 'DELETE',
                url: `/api/cars/${createdCarId}`,
                headers: {
                    'Cookie': Cypress.env('sid')
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
            });
        });

        it('GET - Car was deleted', () => {
            cy.request({
                method: 'GET',
                url: '/api/cars',
                headers: {
                    'Cookie': Cypress.env('sid')
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                const car = findCarById(response.body.data, createdCarId);
                expect(car).to.be.undefined;
            });
        });
    })
})
