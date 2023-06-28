const dbConfig = require('../db/connect.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.books = require('./favoriteBooks.js')(mongoose);
db.students = require('./students.js')(mongoose);

module.exports = db;