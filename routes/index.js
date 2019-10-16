var express = require('express');  //imports express libraries 
var router = express.Router();     //defines express.router as router


/* GET root (index) page. */
router.get('/', function(req, res, next){
   res.render('index', {title: 'Express'});
});


router.get('/:name/:address', function(req,res) {
   var name = req.params.name;
   var address = req.params.address;
   res.render('index', {title: name, address: address});
});

router .get('/test', function(req,res, next){
   res.render('test')
});

//export this router to use in our app.js
module.exports = router;