const { Router } = require('express');

const publicRoutes = require('./publicRoutes');
const privateRoutes = require('./privateRoutes');

const router = Router();

router.use('/publicRoutes', publicRoutes);
router.use('/privateRoutes', privateRoutes);
module.exports = router;
