// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
import { LoginPage } from '../e2e/pageobject/login_page'
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => { 
    var loginpage = new LoginPage()
    loginpage
        .EnterUsername(email);
    loginpage
        .clickonSubmit();
    loginpage
        .EnterPassword(password);
    loginpage
        .clickonSubmit();
 })
Cypress.Commands.add('isUnChecked',($locator)=>{
    cy
    .get($locator)
    .invoke('prop','checked')
    .then(($checked)=>{
        if (!$checked) {
            // expect($checked).to.be.true
             return true

           } 
           else {
            // expect($checked).to.be.false
            return false

           }
    })
})

Cypress.Commands.add('isChecked',($locator)=>{
    cy
    .get($locator)
    .invoke('prop','checked')
    .then(($checked)=>{
        if ($checked) {
            // expect($checked).to.be.true
            cy.log($checked)
             return true

           } 
           else {
            // expect($checked).to.be.false
            return false

           }
    })
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })