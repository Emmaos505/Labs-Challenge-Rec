const { Router } = require('express');
const searchRouter = require('./search.js');

const router = Router();


// Todas las rutas api/search estarán dentro del archivo "./search.js"

router.use('/search', searchRouter);


module.exports = router;