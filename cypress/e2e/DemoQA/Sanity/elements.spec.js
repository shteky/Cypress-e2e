const helpers = require('../../../support/functions')
const assert = require('../../../support/assertions')
const homepage = require('../../../support/DemoQA/Selectors/homepage')
const elements = require('../../../support/DemoQA/Selectors/elements')

beforeEach(() => {
    cy.visit(Cypress.env('demoQA'))
})

describe('DemoQA - Elements', () => {

    it('DemoQA - Elements page', () => {

        assert.elementVisible(homepage.elements);
        helpers.click(homepage.elements);
        cy.url().should('contain', 'elements');
        assert.text(elements.menu.textbox, 'Text Box');

        helpers.click(elements.menu.textbox);
        helpers.click(elements.menu.checkbox);
        helpers.click(elements.menu.links);
    })

    it('DemoQA - Text box output result', () => {
        helpers.click(homepage.elements);

        helpers.click(elements.menu.textbox);
        helpers.typeText(elements.textboxMenu.name, 'John Doe');
        helpers.typeText(elements.textboxMenu.email, 'john.Doe@test.net');
        helpers.typeText(elements.textboxMenu.currentAddress, 'Bulgaria, Sofia city, Lyulin 10 district');
        helpers.typeText(elements.textboxMenu.permanentAddress, 'Bulgaria, Stara Zagora city, Zheleznik district');
        helpers.click(elements.textboxMenu.submitBtn);
        assert.containsText(elements.textboxMenu.output, 'john.Doe@test.net')
        
    })
})

 