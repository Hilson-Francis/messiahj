
var express 			= require('express');
var path 				= require('path');
var logger 				= require('morgan');
var createError 		= require('http-errors');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require('body-parser');
var exphbs 				= require('express-handlebars');
var expressValidator 	= require('express-validator');
var flash 				= require('connect-flash');
var session 			= require('express-session');
var passport 			= require('passport');
var LocalStrategy		= require('passport-local').Strategy;
var mongo 				= require('mongodb');
var mongoose 			= require('mongoose');
var helpers		        = require('handlebars-helpers')();

//Db Connection
//mongoose.connect('mongodb://localhost/messiahj');
//var db = mongoose.connection;

//Routers 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var hbs = exphbs.create({
	helpers: helpers,
	defaultLayout: 'layout'
});

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'vendor')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
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

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});

// module.exports = app;
