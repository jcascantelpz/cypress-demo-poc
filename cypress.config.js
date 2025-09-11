const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "o6isn5", // Id de Cypress Cloud

  reporter: "mochawesome",   // Reporte a utilizar en el proyecto
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true, // true para cuando necesitamos 1, false para poder consolidar el reporte
    json: true //true para poder tomar de cada 1 y unificarlo
  },

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

