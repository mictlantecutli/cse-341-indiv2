const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

module.exports = (mongoose) => {
  const favoriteBookSchema = mongoose.Schema({
    titleBook: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    }
  });
  

  return mongoose.model('favoriteBooks', favoriteBookSchema)

}