const express = require('express'); 
const path = require('path');         // path module proveds utilities for working with files and directories
const mongoose = require('mongoose');
const bodyParser = require('body-parser');;


mongoose.connect('mongodb://localhost/nodedb');
var db = mongoose.connection;

// Check Connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to nodedb')

});


// Initilise express application  
const app = express();

// Bring in Models
var ArticleModel = require('./models/article');

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');








//Body Parser Middleware
  // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
  // parse application/json
app.use(bodyParser.json())












// Home Route
app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello'
  });
});









// Article List Route
app.get('/articles', function(req, res){

  // Pulling from a Database 
  ArticleModel.find({}, function(err, Articles){
    // If it cant find the articles collection - sends error
    if(err){
      console.log(err);  
    }
    //If it can find articles - render infomation from the collection
    else{
      res.render('articles', {
        title: 'Article',
        articles: Articles
      });
    } 
  });
});

















// Add Articles ----------------------------------------
app.get('/articles/add', function(req, res){
  res.render('add_articles', {
    title: "Add Article"
  });
});


// Add Article POST Route 
app.post('/articles/add', function(req, res){
  
  var articleInfo = req.body.articleTitle
  
  console.log(articleInfo);         
  console.log('submitted');

  var newArticle = new ArticleModel({
    title: req.body.articleTitle,
    author: req.body.articleAuthor,
    body: req.body.articleBody
  })
  
  console.log(newArticle)

  newArticle.save(function(err, ArticleModel){
    if(err)
    res.render('show_message', {message: "Database error", type: "error"});
    else
    res.render('show_message', {
       message: "New person added", type: "success", person: personInfo});
  })




  res.render('add_articles', {
    title: "Add Article"
  });
  return;
});






// Article List Route
app.get('/articlesArray', function(req, res){
  let articles = [ // We create an array called "Articles"
      {
        id: 1,
        title: "Article 1",
        author: "Gwent went",
        body: "Star Platinum"
      },
      {
        id: 2,
        title: "Article 2",
        author: "Gwent went",
        body: "Joe mama"
      },
      {
        id: 3,
        title: "Article 3",
        author: "joestar",
        body: "AYAYAYAYA"
      },
    ]

    // Respons with a render of the infomation
    res.render('articles', {
      title: 'Articles',
      articles: articles
      // Author: articles.author, // "Articles" value is the "Articles" array
      // Body: articles.body
    });
});










// Start Server
app.listen(3000, function(){
  console.log('server started on prt 3000')
});



