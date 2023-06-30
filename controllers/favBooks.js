const db = require('../models');
const booksData = db.books;
const ObjectId = require('mongodb').ObjectId;
//const { ObjectId } = require('mongodb');


////////To create a new BOOK in database
exports.newBook = (req, res) => {

  const favoriteBook = new booksData(req.body);

  favoriteBook
    .save()
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the user.'
      });
    });
};


//////to get all the books in the student database
/*exports.getAllBooks = (req, res) => {
  booksData.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Books.'
      });
    });
};*/

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await booksData.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

/*exports.getBookById = (req, res) => {
  //const id = mongoose.Types.ObjectId(req.params.id.trim())
  const bookID= new ObjectId(req.params.id);
  booksData.find({_id:bookID})
    .then((data) => {
      if (!data) res.status(404).send('Not found book with name');
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving book.'
      });
    });
};*/

exports.getBookById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const book = await booksData.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(400);
    next(error);
  }
};


////////////////////
///UPDATE BOOK/////
/////////////////////
exports.upBook = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateBook = await booksData.findByIdAndUpdate(id, req.body);
    res.status(200).json(updateBook);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

////////////////////
///DELETE BOOK/////
/////////////////////
exports.delete = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteB = await booksData.findByIdAndDelete(id);
    res.status(200).json(deleteB);
  } catch (error) {
    res.status(400);
    next(error);
  }
});