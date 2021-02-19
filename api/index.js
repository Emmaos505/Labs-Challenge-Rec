const express = require('express');
const server = express();
const morgan = require('morgan');
require('dotenv').config();
const routes = require('./routes/index.js');




/****  Middelwares  ****/
server.use(morgan('dev'));
server.use(express.json());



server.use('/api', routes);











const PORT = process.env.PORT || 4001;

server.listen(PORT, () => {
    console.log(`El server se ha iniciado correctamente en el puerto ${PORT}`)
})