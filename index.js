const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// const staticFiles = express.static('./client');
const router = require('./router');

// app.use(staticFiles);
app.use(router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
