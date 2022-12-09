import { LoginPage } from "./pageobject/login_page"
describe('Test Scenario', () => {
    before(function () {
        cy
            .fixture('credentials').as('data')
        cy
            .visit(Cypress.env('url'))
        
    })
    it('Simple login', function () {
        Cypress
            .on('uncaught:exception', (err, runnable) => {
                return false;
            });
        

        cy
            .login(this.data.username, this.data.password)
       cy
            .wait(10000)
        cy
            .get('span[id="user"]')
            .should('have.text', this.data.username, 'User Login Unsuccessfully')

            // this.data.username
            // this.data.password




    });
});