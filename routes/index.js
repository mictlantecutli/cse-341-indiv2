const routes = require('express').Router();
const methodsContacts = require('./methods');

// router.use('/methodsLesson', methodsContacts);

routes.use('/', require('./app'));

routes.use('/contacts', methodsContacts);



module.exports = routes
