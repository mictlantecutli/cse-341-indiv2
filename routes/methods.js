const router = require('express').Router();

const books = require('../controllers/index.js');

const dataValidate = require('../middleware/validate.js')

router.get('/', books.getData);

router.get('/:id', books.getData_single);

router.post('/',dataValidate.saveBook, books.newBook);

router.put('/:id',dataValidate.saveBook, books.updateBook);

router.delete('/:id', books.deleteBook);



module.exports = router;


