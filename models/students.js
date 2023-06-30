//const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
module.exports =(mongoose) => {
  const studentSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    favoriteBooks:{
      type: String,
      //ref: 'favoriteBooks',
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true
    }


  });

  return mongoose.model('students', studentSchema)

}