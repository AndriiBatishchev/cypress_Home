const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: 'https://example.cypress.io',
    // retries: {
    //   runMode: 3,
    //   openMode:2,
    // },
    // viewportHeight: 400,
    // viewportWidth: 400,
    video: true,
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
