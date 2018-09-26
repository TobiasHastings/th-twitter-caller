var express = require('express');
const app = express();
var router = express.Router();
const { apiAuthMiddleware: requireApiKey } = require('./auth');
const fetch = require('node-fetch');

router.get('/testEndpoint', requireApiKey,(req,res) => {
  res.send("hello");
});

router.get('callthtwitter/:screenname',requireApiKey,(req,res) => {
	const screenname = req.params.screenname.toLowerCase();
	console.log('screenname: '+screenname);
	res.sent("received");
});


app.use('/', router);

module.exports = app;