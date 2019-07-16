// Modulo con funciones del OS
const os = require('os');

console.log('Total mem', (os.totalmem()/1073741824).toPrecision(2), 'Gb')
console.log('Free mem', (os.freemem()/1073741824).toPrecision(2), 'Gb');
