var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET Hello page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});


module.exports = router;
