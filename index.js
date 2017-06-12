const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router');
const bodyParser = require('body-parser')
// const staticFiles = express.static('./client');
// app.use(staticFiles);
app
  .use(bodyParser.json())
  .use(router)
  .use(cors())


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
