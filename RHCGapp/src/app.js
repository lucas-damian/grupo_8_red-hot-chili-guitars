const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const multer = require("multer");
const expressValidator = require("express-validator");
const methodOverride = require("method-override");
const session = require("express-session");
const userLog = require("./middlewares/logMiddleware");
const localsCheck = require("./middlewares/localsCheck");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/admin/producto');
const userProducts = require('./routes/userProducts')
const cookieCheck = require("./middlewares/cookieCheck");
const masterRout = require("./routes/admin/master");


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"));
app.use(session({secret: "red hot chilli guitars"}));
app.use(userLog);
app.use(cookieCheck);
app.use(localsCheck);



app.use('/', indexRouter);
app.use('/detalle-del-producto', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productRouter);
app.use('/categoria', userProducts);
app.use('/master', masterRout);



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

module.exports = app;
