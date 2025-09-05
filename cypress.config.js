const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o6isn5", // Id de Cypress Cloud

  e2e: {
    setupNodeEvents(on, config) {
      // Opciones de configuración aquí
    },
    browser: "electron", 
    video: true,               // Graba video automáticamente
    screenshotOnRunFailure: true, // Captura pantalla en errores
    retries: 1                 // Reintenta pruebas fallidas  
  }
});

