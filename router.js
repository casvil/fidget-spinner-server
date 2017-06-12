'use strict';

const express = require('express');
const router = express.Router();
// const ctrlMessages = require('./controller/messages');

router.get('/user', function (req, res) {
  res.send('Hello World!')
})
router.post('/user', function (req, res) {
  res.send('Hello World!')
})
router.get('/scores', function (req, res) {
  res.send('Hello World!')
})
router.post('/score', function (req, res) {
  res.send('Hello World!')
})

module.exports = router;
