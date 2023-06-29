const express = require('express');
const router = express.Router();

const booksController = require('../controllers/favBooks.js');

router.post('/newBook', booksController.newBook);

router.get('/looking/:id', booksController.getBookById);

router.get('/', booksController.getAllBooks);

router.put('/changes/:id', booksController.upBook);

router.delete('/deleteBook/:id', booksController.delete);




module.exports = router;