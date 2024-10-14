const { defineConfig } = require("cypress");

module.exports = defineConfig({
  includeShadowDom: true,
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 10000,
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  video: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    hideXHRInCommandLog: true,
  },
  retries: 0,
  env: {
    demoQA: "https://demoqa.com/",
    bookStoreAPI: "https://demoqa.com/swagger/"
  },
});
