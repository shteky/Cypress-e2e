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
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
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
const helpers = require('./functions')
const bookstore = require('./DemoQA/Selectors/bookstore')

Cypress.Commands.add('BookStorelogin', (username, password) => { 

    helpers.click(bookstore.loginBtn)
    helpers.typeText(bookstore.login.username, username);
    helpers.typeText(bookstore.login.password, password);
    helpers.click(bookstore.loginBtn);
})