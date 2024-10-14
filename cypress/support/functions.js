/**
 ============================================================================== 
 * Element interraction commands

    to export the variables and for consistency, declare as follows:
    const helpers = require('<file location>')

 ============================================================================== 
 */ 

/**
     * Click on element
     * @param {string} element - element CSS locator
     * @returns clicks on selected element
 */
const click = function(element)  {
    return cy.get(element).click();
}

/**
     * Click on the first returned DOM element
     * @param {string} element - element CSS locator
     * @returns clicks on the first returned DOM element
 */
const clickFirst = function(element)  {
    return cy.get(element).first().click();
}

/**
     * Click on the last returned DOM element
     * @param {string} element - element CSS locator
     * @returns clicks on the last returned DOM element
 */
const clickLast = function(element)  {
    return cy.get(element).last().click();
}

/**
     * Double click on element
     * @param {string} element - element CSS locator
     * @returns clicks on selected element
 */
const dblClick = function(element)  {
    return cy.get(element).dblclick();
}

/**
     * Right click on element
     * @param {string} element - element CSS locator
     * @returns clicks on selected element
 */
 const rightClick = function(element)  {
    return cy.get(element).rightclick();
}

/**
     * Click on element where it contains specific value
     * @param {string} element - element CSS locator
     * @param {string} value - the value of the element - text, number, etc
     * @returns clicks on selected element
 */
 const containsClick = function(element, value)  {
    cy.contains(element, value).click();
}

/**
     * Type text into field
     * @param {string} element - element CSS locator
     * @param {string} text - input text
     * @returns types text into selected element field
 */
const typeText = function(element, text) {
    return cy.get(element).type(text);
}

/**
     * Clear text from field
     * @param {string} element - element CSS locator
     * @returns clears text from selected element field
 */
 const clearText = function(element) {
    return cy.get(element).clear();
}

/**
     * Checkbox check
     * @param {string} element - element CSS locator
     * @returns checks selected element
 */
 const checkboxCheck = function(element) {
    return cy.get(element).check();
}

/**
     * Checkbox check
     * @param {string} element - element CSS locator
     * @returns unchecks selected element
 */
 const checkboxUncheck = function(element) {
    return cy.get(element).uncheck();
}

/**
     * Picklist select value
     * @param {string} element - element CSS locator
     * @param {string} option - option in picklist
     * @returns selected from the picklist option
 */
 const selectValue = function(element, option) {
    return cy.get(element).select(option);
}

/**
     * Scroll to selected element
     * @param {string} element - element CSS locator
     * @returns scrolls until selected element is in view
 */
const scrollIntoView = function(element) { 
    return cy.get(element).scrollIntoView();
}

/**
     * Widnow Alert
     * @param {string} element - text to be verified on the window alert
     * @returns scrolls until selected element is in view
     * By default Cypress automatically accepts alerts. The only way to interact with them is to assert text in them
 */
const windowAlert = function (element) {
     return cy.on('window:alert', (str) => {
        expect(str).to.equal(element);
    })
}

/**
     * Confirmation Alert
     * @param {string} element - text to be verified on the confirmation alert
     * @returns scrolls until selected element is in view
     * By default Cypress automatically accepts alerts. The only way to interact with them is to assert text in them
 */
 const confirmAlert = function (element) {
    return cy.on('window:confirm', (str) => {
       expect(str).to.equal(element);
   })
}

/**
     * Navigate to new tab
     * @param {string} element - element CSS locator
     * @param {string} removeAttribute - selects the attribute on the href that should be removed: https://docs.w3cub.com/jquery/removeattr
     * @returns scrolls until selected element is in view
 */
const newTabNav = function(element, removeAttribute) {
   return cy.get(element).invoke('removeAttr', removeAttribute).click();
}

/**
 * Visit a page and verify it's loaded
 * @param {string} page - relative url path, without the app url
 * @param {string} checkingElement - element which will be checked once the page is loaded to verify it appear 
 */
const visitAndVerifyPage = function (page, checkingElement) {
    cy.intercept('**/users/getData**', (req) => { //replace request
        req.on('before:response', (res) => {
            // disable caching
            res.headers['cache-control'] = 'no-store'
        });
    }).as('getData');
    cy.visit(`${Cypress.env('appUrl')}${page}`); // replace login command
    cy.wait('@getData').should('include.all.keys', ['request', 'response']);
    cy.get(checkingElement).should('be.visible');
}

module.exports = {
    click,
    clickFirst,
    clickLast,
    dblClick,
    rightClick,
    typeText,
    clearText,
    checkboxCheck,
    checkboxUncheck,
    selectValue,
    scrollIntoView,
    windowAlert,
    confirmAlert,
    newTabNav,
    visitAndVerifyPage,
    containsClick
}