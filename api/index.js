const express = require('express');
const server = express();
const morgan = require('morgan');
require('dotenv').config();
const routes = require('./routes/index.js');
const corse = require('cors');




/****  Middelwares  ****/
server.use(morgan('dev'));
server.use(express.json());
server.use(corse());



server.use('/api', routes);











const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`El server se ha iniciado correctamente en el puerto ${PORT}`)
})