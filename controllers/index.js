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
  const result = await mongodb.getDb().db().collection('contacts').find({_id:userID});
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); 
  });
};

module.exports = { getData, getData_single };