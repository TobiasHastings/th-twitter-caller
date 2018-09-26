var express = require('express');
const app = express();
var router = express.Router();
const { apiAuthMiddleware: requireApiKey } = require('./auth');

router.get('/testEndpoint', requireApiKey,(req,res) => {
  res.send("hello");
});


app.use('/', router);

module.exports = app;