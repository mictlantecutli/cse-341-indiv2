const db = require('../models');
const ObjectId = require('mongodb').ObjectId;
const Student = db.students;


//To create a new student in database
exports.newStudent = (req, res) => {
  // Validate request
  //if (!req.body.username || !req.body.password) {
  //  res.status(400).send({ message: 'Content can not be empty!' });
  //  return;
  //}

  const student = new Student(req.body);
    /*firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    favoriteBooks: req.body.favoriteBooks,
    birthDate: req.body.birthDate,
    location: req.body.location});*/

  student
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

//////to get all the students in the student database
exports.getAll = (req, res) => {
  Student.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};


///GET STUDENT BY ID
exports.getStudentById = (req, res) => {
  const studentID = new ObjectId(req.params.id);
  Student.find({_id:studentID})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving users.'
      });
    });
};

////////////////////
///UPDATE STUDENTS
/////////////////////
exports.upStudent = ('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateStudent = await Student.findByIdAndUpdate(id, req.body);
    res.status(200).json(updateStudent);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

   
  

