var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
var dbcon = require('./utils/dbcon');

router.use(bodyParser.json());

const dbConnectionInfo = dbcon.getDBConnectionInfo();
const connection = mysql.createConnection(dbConnectionInfo);

router.post("/", (req, res) => {
  const mybatisMapper = require("mybatis-mapper");
  var param = req.body;
  req.body.mapper = 'SwToolsMapper'; //mybatis xml 파일명
  req.body.crud = 'select'; // select, insert, update, delete 중에 입력
  req.body.mapper_id = 'selectSwToolsList';
  console.log(param);
  console.log(req.body);
  mybatisMapper.createMapper(['./models/'+param.mapper+'.xml']);
  // createMapper 함수를 사용해 쿼리를 작성할 xml 파일 경로를 파라미터로 전달한다.
  var timeBeforeQuery = new Date();
  console.log(`check time before qurey: ${timeBeforeQuery}`);
  console.log("\n Call Mapper Name = "+param.mapper);

  var format = { language: 'sql', indet: ' '};
  // mybatis에서 mysql을 사용하기 때문에 format의 언어를 sql로 할당한다.

  var sqlStmt = mybatisMapper.getStatement(param.mapper, param.mapper_id, param, format);
  /*
    mysql에서 실행할 쿼리를 getStatement가 생성해 query라는 변수에 할당한다.
    getStatement 함수의 파라미터로 쿼리가 작성될 xml 파일(mapper)명, xml 파일 안에서 실행될 특정 쿼리의 id (mapper_id), 
    req.body로 전달된 파라미터(param) 그리고 format 변수 순서로 세팅한다.
    이 때 req.body 데이터에는 현재 쿼리에서 사용할 데이터가 없다. 하지만 where 절이 있는 select문을 사용하거나
    insert 문, undate 문에 필요한 모든 데이터를 req.body에 담아 쿼리로 전달하게 된다. 
  */
  console.log("\n========= Node Mybatis Query Log Start =========");
  console.log("* mapper namespace : "+param.mapper+"."+param.mapper_id+" *\n");
  console.log(sqlStmt+ "\n");

  connection.query(sqlStmt, function ( error, queryResult ) {
    // 생성된 연결에 query 함수를 사용해 sqlStmt 변수에 저장된 쿼리를 불러와 실행한다.
    // mysql 서버에서 실행 결과를 반환하면, 콜백 함수의 파라미터인 queryResult 변수에 할당된다.
    var timeAfterQuery = new Date();
    console.log(`check time after qurey: ${timeAfterQuery}`);

    // db mysql 서버에서 에러 응답이 온 경우 에러를 응답한다.
    if (error) {
      console.error("db error ************* : "+error);
      res.statusCode = 500; // 내부적인 문제(db의 에러응답)로 요청을 처리할 수 없다.
      res.statusMessage = "Internal error";
      res.send();
      return;
    }

    // 정상 응답을 json 데이터로 변환하여 응답한다.
    console.log('Query Result DATA LIST: \n', queryResult);
    // var queryResultString = JSON.stringify(queryResult);
    // var json = JSON.parse(queryResultString);

    var resData = {
      statusCode: "200",
      data: queryResult
    }
    res.send(resData);
    console.log("\n========= Node Mybatis Query Log End =========");
  })
  
})

module.exports = router; 