/**
 ============================================================================== 
 * Assertions

    to export the variables and for consistency, declare as follows:
    const assert = require('<file location>')
 ============================================================================== 
 */ 

 /**
     * Assert text content
     * @param {string} element - element CSS locator
     * @param {string} text - text to evaluate
     * @returns selected element's text content
 */
 const text = function(element, text) {
    return cy.get(element).should('have.text', text);
}

 /**
     * Assert text content
     * @param {string} element - element CSS locator
     * @param {string} text - text to evaluate
     * @returns if the element contains text
 */
const containsText = function(element, text) {
    return cy.get(element).should('contains.text', text);
}

 /**
     * Assert whether partial text is present
     * @param {string} element - element CSS locator
     * @param {string} text - text to evaluate
     * @returns if the text is included
 */
  const includesText = function(element, expectedText) {
    return cy.get(element).then(function(textValue) {
       const text = textValue.text()
       expect(text.includes(expectedText)).to.be.true;
   })
 }

  /**
     * Assert text content not included
     * @param {string} element - element CSS locator
     * @param {string} text - text to evaluate
     * @returns if texts is not present
 */
 function notIncludesText(element, text) {
    return cy.get(element).should('not.include.text', text);
 }

 /**
     * Assert value content
     * @param {string} element - element CSS locator
     * @param {string} value - element's value - string or integer for example
     * @returns value of selected element
 */
  const value = function(element, value) {
    return cy.get(element).should('have.value', value);
}

 /**
     * Assert length
     * @param {string} element - element CSS locator
     * @param {string} value - length of the element
     * @returns length of selected element
 */
const length = function(element, value) {
    return cy.get(element).should('have.length', value);
}

 /**
     * Assert element visibility
     * @param {string} element - element CSS locator
     * @returns whether element is visible
 */
const elementVisible = function(element) {
    return cy.get(element).should('be.visible');
}

 /**
     * Assert element visibility
     * @param {string} element - element CSS locator
     * @returns whether element is not visible
 */
  const elementNotVisible = function(element) {
    return cy.get(element).should('not.be.visible');
  }

 /**
     * Assert element visibility
     * @param {string} element - element CSS locator
     * @returns whether element doesn't exist
 */
  const elementDoesntExist = function(element) {
    return cy.get(element).should('not.exist');
  }

 /**
     * Assert checkbox state
     * @param {string} element - element CSS locator
     * @returns whether checkbox is checked
 */
const checkboxChecked = function(element) {
    return cy.get(element).should('be.checked');
}

 /**
     * Assert checkbox state
     * @param {string} element - element CSS locator
     * @returns whether checkbox is not checked
 */
  const checkboxNotChecked = function(element) {
    return cy.get(element).should('not.be.checked');
}

 /**
     * Assert element is disabled
     * @param {string} element - element CSS locator
     * @returns whether element is visible
 */
  const elementDisabled = function(element) {
    return cy.get(element).should('be.disabled');
  }

 /**
     * Assert element has an icon available
     * @param {string} element - element CSS locator
     * @returns whether element has an icon available
 */
const hasIcon = function(element) {
    return cy.get(element).find('img').should('have.attr', 'src');
}
 /**
     * Assert two elements texts match
     * @param {string} elementOne - first element CSS locator
     * @param {string} elementTwo - second element CSS locator
     * @param {string} typeOne - define the first type of invocation, e.g. 'text'
     * @param {string} typeTwo - define the second type of invocation, e.g. 'val'
     * @returns whether the first element text matches the second element's one
 */
const compareText = function(elementOne, elementTwo, typeOne, typeTwo) {
    let varOne, varTwo;
    cy.get(elementOne).invoke(typeOne).then(valueOne => {
        varOne = valueOne;
    })
    cy.get(elementTwo).invoke(typeTwo).then(valueTwo => {
        varTwo = valueTwo;
        expect(varOne).to.eq(varTwo);
    })
}

 /**
     * Assert text content
     * @param {string} rowNumber - number of the table's row
     * @param {string} text - text to evaluate
     * @returns whether element matching the given text is visible
 */
function searchResult(rowNumber, column, text) {
     const row = '.rt-tbody > div:nth-of-type(' + rowNumber + ')';
     return cy.get(row).eq(column).contains(text).should('be.visible');
}
 /**
     * Assert element's placeholder text matches
     * @param {string} element - element CSS locator
     * @returns whether element has the placeholder text
 */
  const placeholderText = function(element, text) {
    return cy.get(element).invoke('attr', 'placeholder').should('eq', text)
};

 /**
     * Assert image dimensions
     * @param {string} element - element CSS locator
     * @param {string} dimension - height or width
     * @param {string} value1 - size in pixels
     * @param {string} value1 - size in pixels
     * @returns whether the image size matches the defined size
 */
function dimensions(element, dimension, value1, value2) {
    cy.get(element)
      .invoke(dimension)
      .should('be.greaterThan', value1)
      .and('be.lessThan', value2);
 }
/**
 * Assert element exists then execute a function
 * @param {string} element - the element which we check if exists
 * @param {function} func - function to execute
 * @returns function to execute if the element exists
 */
const ifExists = function(element, func) {
    cy.get('body')
      .then(body => {
          if(!body.find(element).length) {
              return
          }

          return func();
      });
}

 /**
     * Assert element text is empty
     * @param {string} element - element CSS locator
     * @returns whether element text is empty
 */
function isEmpty(element) {
    return cy.get(element).should('be.empty');
}

 /**
     * Assert element text is not empty
     * @param {string} element - element CSS locator
     * @returns whether element text is not empty
 */
function isNotEmpty(element) {
    return cy.get(element).should('not.be.empty');
}


module.exports = {
    text,
    containsText,
    includesText,
    notIncludesText,
    value,
    length,
    elementVisible,
    elementNotVisible,
    elementDoesntExist,
    checkboxChecked,
    checkboxNotChecked,
    elementDisabled,
    hasIcon,
    compareText,
    searchResult,
    placeholderText,
    dimensions,
    isEmpty,
    isNotEmpty,
    ifExists
}