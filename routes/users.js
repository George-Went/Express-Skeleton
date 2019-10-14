var express = require('express'); //imports express
var router = express.Router();    //imports express router functions

/* --- GET users listing. ---  */

//app.method(path, handler(request, response, next))
router.get('/', function(req, res, next) {
  
  res.send('hello users pages');
});

//the router.get/ is extended from the app.js specified route

//app.method(path, handler(request, response, next))
router.get('/cool', function(req, res, next) {
  
  res.send('test');
});

module.exports = router;