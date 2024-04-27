'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Rutes

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//cors

//Rutas
app.get('/pruebas', (req, res) => {
    res.status(200).send({
        message: 'Accion de pruebas en el servidor de NodeJS'
    });
});
//Exportar
module.exports = app;