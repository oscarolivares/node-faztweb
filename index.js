/* const http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('<h1>Hola mundo desde NodeJS</h1>');
  res.end();
}).listen(3000); */

// Refactorizando un poco codigo
/* const http = require('http');

const handlerServer = function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('<h1>Hola mundo</h1>');
  res.end();
}

const server = http.createServer(handlerServer);

server.listen(3000, function() {
  console.log('Server on port 3000');
}); */

// Agregando un modulo con NPM, en este caso "colors"
// para darle algunos stilos a los mensajes por consola
const http = require('http');
const clors = require('colors');

const handlerServer = function(req, res) {
  res.writeHead(200, {'Content-type': 'text/html'});
  res.write('<h1>Hola mundo</h1>');
  res.end();
}

const server = http.createServer(handlerServer);

server.listen(3000, function() {
  console.log('Server on port 3000'.yellow);
});