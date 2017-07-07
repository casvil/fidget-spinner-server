'use strict';

const express = require('express');
const router = express.Router();
const model = require('./model');
// const ctrlMessages = require('./controller/messages');

router.get('/', function (req, res) {
  res.send('Hello World!')
});

router.get('/user', async function (req, res) {
  console.log('new get!');
  let userscores = await model.find({}).sort({'score': -1}).limit(20);
  res.send(userscores);
});

router.post('/user', async function (req, res) {
  console.log('new post! ', req.body.name,': ', req.body.score);
  let user = new model({ name: req.body.name, score: req.body.score });

  await user.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('meow');
    }
  });

  res.send('POST /user')
});

module.exports = router;
