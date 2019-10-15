
// Example Router function

var express = require('express');//import express functions 
var router = express.Router();   //import express router functions 

/* GET example page. */
router.get('/', function(req, res, next) {
  res.render('example');
});

/* POST example page. */
router.post('/', function(req, res){
   res.send('POST route on index.');
});

module.exports = router;
 