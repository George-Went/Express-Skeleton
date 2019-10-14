var express = require('express');  //imports express libraries 
var router = express.Router();     //defines express.router as router

router.get('/', function(req, res){
   res.send('GET route on index.');
});
router.post('/', function(req, res){
   res.send('POST route on index.');
});

//export this router to use in our app.js
module.exports = router