const helpers = require('../../../support/functions')
const assert = require('../../../support/assertions')
const homepage = require('../../../support/DemoQA/Selectors/homepage')
const bookstore = require('../../../support/DemoQA/Selectors/bookstore')
const { empty } = require('check-more-types')

beforeEach(() => {
    cy.visit(Cypress.env('demoQA'))
    helpers.click(homepage.bookStoreApp)
    cy.BookStorelogin('test1', 'P@ssw0rd-1');
})

// list of books
const books = [
    'Learning JavaScript Design Patterns',
    'Git Pocket Guide',
    'Speaking JavaScript',
    "You Don't Know JS",
    'Programming JavaScript Applications',
    'Understanding ECMAScript 6',
]

describe('Books listing page', ()=> { 

    it('Books listings', ()=> { 

        assert.elementVisible(bookstore.store.listing);
        cy.get(bookstore.store.listing).children().should('have.length', 10);
    })

    it('Search for book', ()=> { 

        //Verifies available books based on search
        for (let index = 0; index < books.length; index ++) {
            helpers.typeText(bookstore.store.searchBox, books[index])
            assert.text('.action-buttons > .mr-2', books[index]);
            helpers.clearText(bookstore.store.searchBox);
        }
    })

    it('cross-origin', ()=> {
        cy.visit('https://dev.bg');
        cy.visit('https://filiphric.com');
        cy.visit('https://www.jobs.bg');
        cy.visit('https://docs.cypress.io');
    })
})