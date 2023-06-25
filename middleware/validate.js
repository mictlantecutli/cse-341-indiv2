const validator = require('../helpers/validate');

const saveBook = (req, res, next) => {
  const validationRule = {
    titleBook: 'required|string',
    author: 'required|string',
    genre: 'required|string',
    pages: 'required|string',
    image: 'required|string',
    publisher: 'required|string',
    yearEdition: 'required|string'

  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveBook
};