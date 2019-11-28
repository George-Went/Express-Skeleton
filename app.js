var express = require('express'); 
var path = require('path'); 
// path module proveds utilities for working with files and directories


// Generate express application  
var app = express();


// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello'
  });
});

// Add Route
app.get('/book/add', function(req, res){
  res.render('add_book', {
    title:'Add Books'
  })
});

// Start Server
app.listen(3000, function(){
  console.log('server started on prt 3000')
});



