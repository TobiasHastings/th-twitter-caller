var express = require('express');
const app = express();
var router = express.Router();
const { apiAuthMiddleware: requireApiKey } = require('./auth');
const fetch = require('node-fetch');
const {getFriends} = require('./twitter-api');

router.get('/testEndpoint', requireApiKey,(req,res) => {
  res.send("hello");
});

router.get('/callthtwitter/:screenname',requireApiKey, async (req,res) => {
	const screenname = req.params.screenname.toLowerCase();
	console.log('screenname: '+screenname);
	const twitterFriends = await getFriends(screenname);
	console.log('friends: '+twitterFriends);
	res.send("received");
	res.send({
		result: "success",
		twitterFriends: twitterFriends
	});
});


app.use('/', router);

module.exports = app;