const express = require('express');
const router = express.Router();

router.use('/', require('./swaggerRoutes'));
router.use('/', require('./students'));
router.use('/', require('./books'));

router.get('/login', passport.authenticate('github'), (req, res)=>{});

router.get('/logout', function(req, res, next){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect('/');
  });
});

module.exports = router;
