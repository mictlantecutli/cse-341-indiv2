const express = require('express');
const router = express.Router();

router.use('/', require('./swaggerRoutes'));
router.use('/', require('./students'));
router.use('/', require('./books'));

module.exports = router;
