function add(x1, x2) {
  return x1 + x2;
}

function substract(x1, x2) {
  return x1 - x2;
}

function multiply(x1, x2) {
  return x1 * x2;
}

function divide(x1, x2) {
  if(x2 === 0) {
    console.log("División por cero no definida");
  } else {
    return x1 / x2;
  }
}

// Esportando como módulo
const Math = {}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;

// Exportando las propiedades
/* exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide; */
