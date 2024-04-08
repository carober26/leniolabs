const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementa los escuchadores de eventos de nodo aquí
    },
  },
  projectId: 'ttdgy8',
  // Otros ajustes de configuración...
});
