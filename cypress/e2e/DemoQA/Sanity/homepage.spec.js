const helpers = require('../../../support/functions')
const assert = require('../../../support/assertions')
const homepage = require('../../../support/DemoQA/Selectors/homepage')

beforeEach(() => {
    cy.visit(Cypress.env('demoQA'))
})

describe('DemoQA - Elements', () => {

    it('DemoQA - Elements page', () => {

        // Verifies elements visibility on homepage
        for(let index = 0; index < homepage.homepageElements.length; index ++) {
            assert.elementVisible(homepage.homepageElements[index]);
        }

        // Verifies element texts on homepage
        for(let index = 0; index < homepage.elementsLabels.length; index ++) {
            assert.containsText(homepage.homepageElements[index], homepage.elementsLabels[index]);
        }
    })
})