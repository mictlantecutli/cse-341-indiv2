const teacherRoute = require('./routes/index');
const express = require('express');
const app = express();
const parser = require('body-parser');
//const MongoClient = require(mongodb).MongoClient;
const mongodb = require('./db/connect');
var cors = require('cors');


app.use(cors());

//const port = 8000;

app.use(parser.json());

app.use('/', teacherRoute);


mongodb.initDb((err
  )=>{
  if (err){
    console.log(err);
  }else{
    app.listen(process.env.PORT);
    console.log('Web Server is listening at port '+ (process.env.PORT));
    
  }
});
