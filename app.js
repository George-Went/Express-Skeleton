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

// Book List Route
app.get('/books', function(req, res){
  let books = [ // We create an array called "books"
    {
      id: 1,
      title: "Book 1",
      author: "Gwent went",
      body: "Star Platinum"
    },
    {
      id: 2,
      title: "Book 2",
      author: "Gwent went",
      body: "Joe mama"
    },
    {
      id: 3,
      title: "Book 3",
      author: "joestar",
      body: "AYAYAYAYA"
    },
  ]
  //Respons with a render of the infomation
  res.render('books', {
    title: 'List of Books',
    books: books // "books" value is the "books" array
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



