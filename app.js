
var createError = require('http-errors') 
var express = require('express'); //importing the express dependancies
var path = require('path');


//Import routes 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exampleRouter = require('./routes/example');


//generate express application  
var app = express();//app is used as an alias for calling express modules 

//view engine setup
app.set('view engine', 'pug');
//Sets template engine to pug
app.set('views', path.join(__dirname, 'views')); 
//shows template engine where templates are


//Middleware Libraries 

//Middlware-Routing libraries 
app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/example', exampleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// Extra Functions 
// -- basic page display 
app.get('/hello', function(req, res){
  res.send("Howdy yall!");
});

//add error handling 



//add logging (if not using pre-existing logging packages)
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
  console.log(path.join(__dirname, 'views'))
});

module.exports = app;// allows for the app.js file to be exported as a module 