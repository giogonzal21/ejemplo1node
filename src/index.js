/*'use strict';
const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type' : 'text/plain' });
    res.end(':)');
});
server.listen(5000);*/

/*const express = require('express')
const app = express()
const port = 3000

//Estructura base de app.get
//app.get ('/', () => {})

app.get ('/', (req, res) => {
    res.send('¡Hola Mundo!, esto no es una página 🤢😎')
})

app.listen (port, () => {
    console.log('La aplicacion se esta ejecutando por el puerto ' + port)
})*/
// Importación del módulo body-parser para analizar el cuerpo de las solicitudes entrantes en el servidor
const parser = require("body-parser");

// Importación del módulo express, un marco de aplicación web para Node.js
const express = require('express');

// Creación de una instancia de la aplicación Express
const app = express();

// Definición del número de puerto en el cual el servidor estará escuchando las solicitudes entrantes
const port = 3000;

// Importación del módulo de las rutas relacionadas con los animales desde un archivo local
const animalRoutes = require("./routes/animalRoutes");

// Importación del módulo mongoose, una librería de modelado de objetos MongoDB para Node.js
const mongoose = require("mongoose");

// Carga de la configuración de variables de entorno definidas en un archivo .env
require('dotenv').config();

// Configuración de Express para analizar los datos codificados en la URL en las solicitudes entrantes
app.use(parser.urlencoded({ extended: false }));

// Configuración de Express para analizar los datos en formato JSON en las solicitudes entrantes
app.use(parser.json());

// Configuración de Express para usar las rutas definidas en animalRoutes cuando se acceda a cualquier ruta que comience con "/api"
app.use("/api", animalRoutes);

// Configuración de Express para analizar el cuerpo de las solicitudes entrantes como JSON de manera global
app.use(express.json());

// Conexión a la base de datos MongoDB utilizando la URI proporcionada a través de la variable de entorno MONGODB_URI
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

// Inicio del servidor Express para escuchar las solicitudes entrantes en el puerto especificado
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


