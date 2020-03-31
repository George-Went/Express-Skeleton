var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog'); 
  //This redirects all index urls to /catalog
  //Meaning /author/create becomes /catalog/author/create
});
module.exports = router;
