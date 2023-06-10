const router = require('express').Router();

const teacherUser = require('../controllers/index.js');


router.get('/contacts', teacherUser.getData);

router.get('/contacts/:id', teacherUser.getData_single);



module.exports = router;


