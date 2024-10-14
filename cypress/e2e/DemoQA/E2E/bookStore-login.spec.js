const helpers = require('../../../support/functions')
const assert = require('../../../support/assertions')
const homepage = require('../../../support/DemoQA/Selectors/homepage')
const bookstore = require('../../../support/DemoQA/Selectors/bookstore')


beforeEach(() => {
    cy.visit(Cypress.env('demoQA'))
    helpers.click(homepage.bookStoreApp)
})

describe('Login / Logout functionality', ()=> { 

    it('Login existing user', ()=> {

        helpers.click(bookstore.loginBtn)
        helpers.typeText(bookstore.login.username, 'test1');
        helpers.typeText(bookstore.login.password, 'P@ssw0rd-1');
        helpers.click(bookstore.loginBtn);

        assert.elementVisible(bookstore.logoutBtn);
    })

    it('User logout', ()=> { 

        cy.BookStorelogin('test1', 'P@ssw0rd-1');
        helpers.click(bookstore.logoutBtn);

        assert.elementVisible(bookstore.loginBtn);
    })

    it('if/else login', ()=> {

        cy.get('.col-md-6').then((body) => {
            
            if(body.find(bookstore.loginBtn).length > 0) {
                
                helpers.click(bookstore.logoutBtn);
            }
            else { 
                assert.elementDoesntExist(bookstore.logoutBtn);
                cy.BookStorelogin('test1', 'P@ssw0rd-1');
            }

        })
    })
})