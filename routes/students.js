const express = require('express');
const router = express.Router();

const studentController = require('../controllers/students');

router.get('/Allstudents', studentController.getAll);

router.get('/:id', studentController.getStudentById);

router.post('/newStudent', studentController.newStudent);

router.put('/:id', studentController.upStudent);

module.exports = router;