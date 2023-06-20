const routes = require('express').Router();
const methodsBooks = require('./methods');

// router.use('/methodsLesson', methodsContacts);

routes.use('/', require('./app'));

routes.use('/books', methodsBooks);



module.exports = routes
