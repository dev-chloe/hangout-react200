var express = require('express');

var router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));
// body-parser 패키지의 urlencoded 함수를 실행하면, &key1=value&key2=value2와 같은 형태로 전달되는 데이터를 추출할 수 있따.

router.post('/', (req, res, next) => {
  var type = req.query.type;
  if(type == 'list') {
    // 호출 url에서 type이라는 key의 value를 추출하기 위해서는 req.query 문법으로 key 값에 접근해야 한다.
    // type 값에 따라 호출하는 쿼리 정보를 분기 처리한다.

    // Swtool 리스트 조회
    try {
      // Mysql Api 모듈(CRUD)
      var dbconnect_Module = require('./dbconnect_Module');
      // Mysql 쿼리 호출 정보 입력
      req.body.mapper = 'SwToolsMapper'; //mybatis xml 파일명
      req.body.crud = 'select'; // select, insert, update, delete 중에 입력
      req.body.mapper_id = 'selectSwToolsList';
      // 쿼리가 작성될 xml 파일명(mapper), 작업 종류(crud), 실행 쿼리의 id(mapper_id) 정보를 request body에 넣는다. json 형태의 데이터로 할당한다.


      router.use('/', dbconnect_Module);
      /* 
        require한 dbconnect_Module 파일로 라우팅한다. 
        dbconnect_Module파일도 라우터 역할을 하는데 mysqul 서버를 연결해 쿼리를 실행하고 결괏값을 response로 전송한다.
      */
      next('route')
      // next 함수를 사용하면 현재 라우터에서 response를 보내지 않고 다음 라우터로 response 작업을 넘길 수 있다.
    } catch (error) {
      console.log("Module > dbconnect error: " + error);
    }
  }
})

module.exports = router;