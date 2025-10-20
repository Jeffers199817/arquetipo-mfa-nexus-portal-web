/**
 * Configuración del entorno de producción
 * Contiene las variables de configuración para el entorno de producción
 */
export const environment = {
  production: true,
  apiUrl: 'https://dev-api.pichincha.com/spf-msa-apex-core-service',
  appName: 'Banking Portal',
  version: '1.0.0',
  enableLogging: false,
  enableMockData: false,
  features: {
    enableReports: true,
    enablePdfDownload: true,
    enableAdvancedSearch: true
  }
};


