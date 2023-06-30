const express = require('express');
const router = express.Router();

const booksController = require('../controllers/favBooks.js');

const { isAuthenticate } = require('../middleware/authenticate.js');

router.post('/newBook', isAuthenticate, booksController.newBook);

router.get('/looking/:id', booksController.getBookById);

router.get('/', booksController.getAllBooks);

router.put('/changes/:id', isAuthenticate, booksController.upBook);

router.delete('/deleteBook/:id', isAuthenticate, booksController.delete);




module.exports = router;