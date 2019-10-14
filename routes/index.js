var express = require('express');  //imports express libraries 
var router = express.Router();     //defines express.router as router


/* GET home (index) page. */
router.get('/', function(req, res, next){
   res.render('index', {title: 'Express'});
});

// router.post('/', function(req, res){
//    res.send('POST route on index.');
// });

//export this router to use in our app.js
module.exports = router