const express = require('express');
const router = express.Router();

const studentController = require('../controllers/students');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/Allstudents', studentController.getAll);

router.get('/singleStudent/:id', studentController.getStudentById);

router.post('/newStudent', isAuthenticated, studentController.newStudent);

router.put('/singleStudent/:id',isAuthenticated, studentController.upStudent);

router.delete('/deleteStudent/:id', isAuthenticated, studentController.delete);

module.exports = router;