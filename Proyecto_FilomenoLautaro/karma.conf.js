module.exports = function(config) {
    config.set({
      // Marco de pruebas que se utilizará
      frameworks: ['jasmine'],
  
      // Archivos necesarios para ejecutar las pruebas
      files: [
        'src/**/*.js',  // Ruta a tus archivos de código fuente
        'test/**/*.spec.js'  // Ruta a tus archivos de prueba
      ],
  
      // Configuración de los informes de pruebas
      reporters: ['progress'],
  
      // Navegadores que se utilizarán para ejecutar las pruebas
      browsers: ['Chrome']
    });
  };
  