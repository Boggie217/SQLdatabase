const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/books', controller.getAllBooks);

router.get('/books/:id', controller.getBookById);

router.get('/authors/:id', controller.getAuthorById);

router.get('/authors', controller.getAllAuthors);




router.get('/authors/:id', controller.getAuthorById);

router.get('/authors', controller.getAllAuthors);



router.get('/authors/:id', controller.getAuthorById);

router.get('/authors', controller.getAllAuthors);
// etc...


const model = require('./model');

router.post('/create', (req, res) => {
  model.create(req.body, (err, result) => {
    // handle response
  });
});




router.post('/read', (req, res) => {
    model.read(req.body, (err, result) => {
      // handle response
    });
  });



  router.post('/update', (req, res) => {
    model.update(req.body, (err, result) => {
      // handle response
    });
  });




  router.post('/delete', (req, res) => {
    model.delete(req.body, (err, result) => {
      // handle response
    });
  });



//create get, get, put, delete delete files 
//not sure whether otr not to move the files into their respective folders.
//author has many books?
//book belongs to author??


// this file contains the route directions between the files.
module.exports = router;
