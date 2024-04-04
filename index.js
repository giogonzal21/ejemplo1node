/*'use strict';
const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : 'text/plain' });
    res.end(':)');
});
server.listen(5000);*/

const express = require('express')
const app = express()
const port = 3000

//Estructura base de app.get
//app.get ('/', () => {})

app.get ('/', (req, res) => {
    res.send('¡Hola Mundo!, esto no es una página 🤢😎')
})

app.listen (port, () => {
    console.log('La aplicacion se esta ejecutando por el puerto ' + port)
})