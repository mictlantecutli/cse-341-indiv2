const routes = require('express').Router();
const methodsContacts = require('./methods');

// router.use('/methodsLesson', methodsContacts);

routes.use('/', require('./app'));

routes.use('/methodsLesson', methodsContacts);



module.exports = routes
