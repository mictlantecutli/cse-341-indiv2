const express = require('express');
const router = express.Router();

const studentController = require('../controllers/students');

const { isAuthenticate } = require('../middleware/authenticate');

router.get('/Allstudents', studentController.getAll);

router.get('/:id', studentController.getStudentById);

router.post('/newStudent', isAuthenticate, studentController.newStudent);

router.put('/:id',isAuthenticate, studentController.upStudent);

router.delete('/deleteStudent/:id', isAuthenticate, studentController.delete);

module.exports = router;