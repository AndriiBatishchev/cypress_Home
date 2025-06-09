const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space/',
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
  env:{
    AUTH_USERNAME: 'guest',
    AUTH_PASSWORD: 'welcome2qauto',
    TEST_USER_EMAIL: 'test+testovich_2@gmail.com',
    TEST_USER_PASSWORD: '1234567890aA',
  }
});
