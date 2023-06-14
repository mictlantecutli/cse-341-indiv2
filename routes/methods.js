const router = require('express').Router();

const teacherUser = require('../controllers/index.js');


router.get('/', teacherUser.getData);

router.get('/:id', teacherUser.getData_single);

router.post('/', teacherUser.newContact);

router.put('/:id', teacherUser.update);

router.delete('/:id', teacherUser.deleteContact);



module.exports = router;


