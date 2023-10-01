
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env:{
    baseUrl: 'https://staging.qmach.in/',
  },
  retries:{
    runMode:1,
    openMode:0
  },
  userAgent:  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
  viewportHeight: 786,
  viewportWidth: 1266,
  e2e: {
    setupNodeEvents: function(on, config) {
      return require('./cypress/plugins/index.js')(on,config)
    },
  },

})
