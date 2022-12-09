export class LoginPage {
    EnterUsername(username) {
        cy.
            get('input[name="j_username"]').type(username);
    }

    EnterPassword(password) {
        cy.
            get('#password').type(password);
    }

    clickonSubmit() {
        cy.
            get('#login-submit').click()
    }
}