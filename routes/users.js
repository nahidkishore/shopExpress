var express = require('express');
const { route } = require('.');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user route');
});

router.get('/id', function(req, res, next) {
  res.send('user id router');
});
module.exports = router;
