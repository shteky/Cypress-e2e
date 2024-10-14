
/**
    to export the variables and for consistency, declare as follows:
    const homepage = require('<file location>')
*/

const homepageElements = [
    ".category-cards > div:nth-of-type(1)",
    ".category-cards > div:nth-of-type(2)",
    ".category-cards > div:nth-of-type(3)",
    ".category-cards > div:nth-of-type(4)",
    "div:nth-of-type(5)"
]

const elementsLabels = [
    "Elements",
    "Forms",
    "Alerts, Frame & Windows",
    "Widgets",
    "Interactions"
]

module.exports = {
    homepageElements,
    elementsLabels,
    header: "header",
    elements: ".category-cards > div:nth-of-type(1)",
    forms: ".category-cards > div:nth-of-type(2)",
    alerts_frames: ".category-cards > div:nth-of-type(3)",
    widgets: ".category-cards > div:nth-of-type(4)",
    interactions: "div:nth-of-type(5)",
    bookStoreApp: "div:nth-of-type(6)"
    
}