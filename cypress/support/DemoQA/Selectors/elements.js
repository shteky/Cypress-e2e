
/**
    to export the variables and for consistency, declare as follows:
    const elements = require('<file location>')
*/

module.exports = {
    menu: {
        textbox: ".show li:nth-of-type(1)",
        checkbox: ".show li:nth-of-type(2)",
        radioButton: ".show li:nth-of-type(3)",
        webTables: ".show li:nth-of-type(4)",
        buttons: ".show li:nth-of-type(5)",
        links: ".show li:nth-of-type(6)",
    },

    textboxMenu: { 
        name: "#userName",
        email: "#userEmail",
        currentAddress: "#currentAddress",
        permanentAddress: "#permanentAddress",
        submitBtn: "#submit",
        output: "#output",
    },

    checkboxMenu: {
        dropdown: ".rct-collapse",
        home: "#tree-node-home",
        desktop: "[for='tree-node-desktop'] > .rct-checkbox",
        documents: "[for='tree-node-documents'] > .rct-checkbox",
        downloads: "[for='tree-node-downloads'] > .rct-checkbox",
    },

    radioButtonMenu: {
        yesBtn: "[for='yesRadio']",
        impressiveBtn: "[for='impressiveRadio']",
        noBtn: "[for='noRadio']",
        successMessage: ".mt-3",
    },

    webTablesMenu: {

    }
}