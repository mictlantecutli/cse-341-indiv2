const express = require('express');
const router = express.Router();

const booksController = require('../controllers/favBooks.js');

const { isAuthenticated } = require('../middleware/authenticate.js');

router.post('/newBook', isAuthenticated, booksController.newBook);

router.get('/looking/:id', booksController.getBookById);

router.get('/allBooks', booksController.getAllBooks);

router.put('/upBook/:id', isAuthenticated, booksController.upBook);

router.delete('/deleteBook/:id', isAuthenticated, booksController.delete);




module.exports = router;