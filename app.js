const createError = require('http-errors');
const express = require('express'); 
const path = require('path');         // path module proveds utilities for working with files and directories

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Route Imports  --------------------------------------------
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog'); 

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost/nodedb';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

// Check default Connection + bind connection to event notification
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected to nodedb')

});


// Initilise express application  
var app = express();


// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  
// Add catalog routes to middleware chain.
// If we map to a certian route, any route in the .js file
// will become /catalog/<route_defined> (/ becomes /catalog)























// Catch 404 
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start Server
app.listen(3000, function(){
  console.log('server started on prt 3000')
});



