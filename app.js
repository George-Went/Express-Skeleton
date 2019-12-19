const express = require('express'); 
const path = require('path');         // path module proveds utilities for working with files and directories
const mongoose = require('mongoose')



mongoose.connect('mongodb://localhost/nodedb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to nodedb')

});


// Initilise express application  
const app = express();

// Bring in Models
var Article = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello'
  });
});


// Article List Route
app.get('/Articles', function(req, res){

  // Pulling from a Database 
  Article.find({}, function(err, Articles){
    if(err){
      console.log(err);
    }
    else{
      res.render('index', {
        title: Articles,
        Articles: Articles 
      });
    } 
  });

  // let Articles = [ // We create an array called "Articles"
  //   {
  //     id: 1,
  //     title: "Article 1",
  //     author: "Gwent went",
  //     body: "Star Platinum"
  //   },
  //   {
  //     id: 2,
  //     title: "Article 2",
  //     author: "Gwent went",
  //     body: "Joe mama"
  //   },
  //   {
  //     id: 3,
  //     title: "Article 3",
  //     author: "joestar",
  //     body: "AYAYAYAYA"
  //   },
  // ]

  //Respons with a render of the infomation
  // res.render('Articles', {
  //   title: 'List of Articles',
  //   Articles: Articles // "Articles" value is the "Articles" array
  // });
});


// Add Route
app.get('/Article/add', function(req, res){
  res.render('add_Article', {
    title:'Add Articles'
  })
});

// Start Server
app.listen(3000, function(){
  console.log('server started on prt 3000')
});



