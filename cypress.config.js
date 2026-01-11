const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://react-shopping-cart-fawn.vercel.app/",
    viewportWidth: 1280,
    wiewportHeight: 1000,
  },
});
