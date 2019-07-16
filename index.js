const fs = require('fs');

// Codigo asincrono con callback 'fuction(err)'
fs.writeFile('./texto.txt', 'linea uno', function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Archivo creado');
    
  }
});

console.log('codigo siguiente');
