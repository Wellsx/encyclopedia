const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};

import '@shelex/cypress-allure-plugin';

/// <reference types="@shelex/cypress-allure-plugin" />
