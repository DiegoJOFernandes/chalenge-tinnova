const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:"cypress/api/*.cy.js",
    watchForFileChanges: false
  },
  env:{
    snapshotOnly: true,
    hideCredentials: true,
    API: { 
      ENDPOINT_BOARDS: process.env.ENDPOINT_BOARDS,
      ENDPOINT_CARDS: process.env.ENDPOINT_CARDS,
      ENDPOINT_LISTS: process.env.ENDPOINT_LISTS,
      SECRET: process.env.SECRET_API,
      KEY: process.env.KEY_API,
      TOKEN: process.env.TOKEN_API
    },
      
  },
});
