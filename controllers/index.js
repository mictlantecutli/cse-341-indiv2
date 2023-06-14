const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('test').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
};

const getData_single = async (req, res, next) => {
  const userID = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db('test').collection('contacts').find({_id:userID});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); 
  });
};

const newContact = async (req, res, next) => {
  const contact_new = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.lastName,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
  };
  
  const result = await mongodb.getDb().db('test').collection('contacts').insertOne(contact_new);
  if (result.acknowledged){
    res.status(201).json(result);
  }else{

    res.status(500).json(result.console.error('was no created a new contact'));

  }
};

const update = async (req, res, next) => {
  const userID = new ObjectId(req.params.id);
  const contact_update = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.lastName,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
  };
  
  const result = await mongodb.getDb().db('test').collection('contacts').replaceOne({_id:userID}, contact_update);
  if (result.modifiedCount > 0){
    res.status(204).send();
  }else{

    res.status(500).json(result.console.error('was no updated the contact'));

  }
};


const deleteContact = async (req, res, next) => {
  const userID = new ObjectId(req.params.id);
  
  const result = await mongodb.getDb().db('test').collection('contacts').deleteOne({_id:userID}, true);
  if (result.deletedCount > 0){
    res.status(204).send();
  }else{

    res.status(500).json(result.console.error('was no removed the contact'));

  }
};

  

module.exports = { getData, getData_single, newContact, update, deleteContact };