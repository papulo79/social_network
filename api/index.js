'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_scocial')
    .then(() => {
        console.log('La conexión a la base de datos curso_mean_scocial se ha realizado correctamente');

        //Crear servidor
        app.listen(port, () => {
            console.log('Servidor corriendo en http://localhost:3800');
        });
    })
    .catch(err => {
        console.log('patata');    
        console.log(err)}
    );

