var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;

// 라우팅이란, 네트워트 주소에 따라 목적지 경로를 체게적으로 결정하는 경로 선택 과정이다.