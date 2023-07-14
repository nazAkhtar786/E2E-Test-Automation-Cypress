const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.moneycorp.com/en-us/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
 //  specPattern:'cypress/integration/specs/*.js'
  },
});
