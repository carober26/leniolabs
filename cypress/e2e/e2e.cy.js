describe('Inicio de sesión en página de demostración de Cypress', () => {
    it('Inicia sesión con credenciales válidas', () => {
      // Visita la página de inicio de sesión
      cy.visit('https://www.google.com.ar/');
  

      cy.contains('Buscar con Google').should('exist');
    });
  });
  