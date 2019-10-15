
var createError = require('http-errors') 
var express = require('express'); //importing the express dependancies
var path = require('path');


//Import routes 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exampleRouter = require('./routes/example');

//generate express application  
var app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/example', exampleRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, './public')));




// Extra Functions 
// -- basic page display 
app.get('/hello', function(req, res){
  res.send("Howdy yall!");
});

//add error handling 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




//add logging (if not using pre-existing logging packages)
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
  console.log(path.join(__dirname, 'views'))
});

module.exports = app;