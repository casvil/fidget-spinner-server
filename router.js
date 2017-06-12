'use strict';

const express = require('express');
const router = express.Router();
const model = require('./model');
// const ctrlMessages = require('./controller/messages');

router.get('/', function (req, res) {
  res.send('Hello World!')
})
router.get('/user', function (req, res) {
  res.send('GET /user')
})
router.post('/user', function (req, res) {

  let user = new model({ name: req.body.user, score: req.body.score });

  user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });

  res.send('POST /user')
})
router.get('/scores', function (req, res) {
  res.send('GET /scores')
})
router.post('/score', function (req, res) {
  res.send('POST /score')
})

module.exports = router;
