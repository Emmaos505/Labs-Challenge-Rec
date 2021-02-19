const server = require('express').Router();
const getProducts = require('../apiML/apiML.js')


// Ruta api/search/

server.get('/', getProducts);




module.exports = server;