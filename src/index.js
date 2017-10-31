'use-strict'

const express = require('express');
const http = require('http')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const config = require('./config.json')

const monogConn = require('./mongo-con')

const index = require('./routes/index');
const users = require('./routes/users.routes');
const kolels = require('./routes/kolel.routes');
const transactions = require('./routes/transactions.routes');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/kolels', kolels);
app.use('/transactions', transactions);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Connect to mongo then starts the server
monogConn.connect(config.mongo).then(()=>{
  app.server = http.createServer(app)
  app.server.listen(process.env.PORT || config.port, ()=>{
    console.log(`Server is up and listenning on port ${app.server.address().port}`)
  })
}).catch((err)=>{
  console.error(err)
})
