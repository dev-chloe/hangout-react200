var express = require('express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dbcon = require('./routes/utils/dbcon');
var swtoolRouter = require('./routes/SwtoolRout');

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/Swtool', swtoolRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
dbcon.getDBConnectionInfo();
// module.exports = app;

// 라우팅이란, 네트워트 주소에 따라 목적지 경로를 체게적으로 결정하는 경로 선택 과정이다.

/*
  yarn dev 명령어를 실행하면, concurrently가 yarn server와 yarn clien 명령어를 동시에 실행한다.
  --kill-others-on-fail은 두 명령어중 하나라도 에러가 나면, 모두 종료하는 옵션이다.

  yarn client 명령어는 react 경로로 폴더 경로로 이동해 react 서버를 실행한다.

  yarn server 명령어에는 node 경로에서 server.js를 nodemon으로 실행해 node 서버를 구동한다.
  express 기본 설정에서는 포트 정보가 있는 www 파일을 실행했지만, 
  수정 후 www 파이 대신 server.js를 참조하기 때문에 server.js 소스에 포트 정보를 작성해야 한다.
*/

/* 
  post 방식으로 api를 호출하는 경우 전달하는 데이터들을 request body에 담아 전달할 수 있다.
  호출받은 node 서버에서 body-parser 패키지를 사용하면, 간단하게 body에 있는 파라미터를 축출해 사용할 수 있다.
*/