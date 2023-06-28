/*const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('project02').collection('books').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
};

const getData_single = async (req, res, next) => {
  const bookID = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('project02').collection('books').find({_id:bookID});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); 
  });
};

const newBook = async (req, res, next) => {
  const book_new = {
      titleBook: req.body.titleBook,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages,
      image: req.body.image,
      publisher: req.body.publisher,
      yearEdition: req.body.yearEdition
  };
  
  const result = await mongodb.getDb().db('project02').collection('books').insertOne(book_new);
  if (result.acknowledged){
    res.status(201).json(result);
  }else{

    res.status(500).json(result.console.error('was no created a new contact'));

  }
};

const updateBook = async (req, res, next) => {
  const userID = new ObjectId(req.params.id);
  const book_update = {
    titleBook: req.body.titleBook,
    author: req.body.author,
    genre: req.body.genre,
    pages: req.body.pages,
    image: req.body.image,
    publisher: req.body.publisher,
    yearEdition: req.body.yearEdition
};
  
  const result = await mongodb.getDb().db('project02').collection('books').replaceOne({_id:userID}, book_update);
  if (result.modifiedCount > 0){
    res.status(204).send();
  }else{

    res.status(500).json(result.console.error('was no updated the contact'));

  }
};


const deleteBook = async (req, res, next) => {
  const bookID = new ObjectId(req.params.id);
  
  const result = await mongodb.getDb().db('project02').collection('books').deleteOne({_id:bookID}, true);
  if (result.deletedCount > 0){
    res.status(204).send();
  }else{

    res.status(500).json(result.console.error('was no removed the contact'));

  }
};

  

module.exports = { getData, getData_single, newBook, updateBook, deleteBook};*/