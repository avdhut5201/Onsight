const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    url:"https://oinsightsvm1.westindia.cloudapp.azure.com:444/ctsOInsightsBMS/res/createReport.html"
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
   
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
     
      
   
      
    },
  }
})