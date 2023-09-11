const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
    // Generate JSON file to create custom reports
    json: true,
    // Customize the directory in which reports are saved
    reportsDir: 'reports/your-reports-folder',
    // Customize the report file name
    reportFilename: 'my-report',
    // Generate new report file or overwrite the a single file
    overwrite: false
  },
  // video: false,
  // reporterOptions: {
  // charts: true,
  // reportPageTitle: 'Cypress Inline Reporter',
  // embeddedScreenshots: true,
  // inlineAssets: true, //Adds the asserts inline
  // reportDir: "cypress/reportPrajna",

  e2e: {
    setupNodeEvents,
    baseUrl: "https://cms.demo.katalon.com/",
    specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000
  },
});
