const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },

    baseUrl: 'http://127.0.0.1:8000/',
    video: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 20000,
  },
  env: {
    allureReuseAfterSpec: true,
    allure: true,
    allureResultsPath: '../TestResults/results',
    allureLogCypress: true,
  },
});
