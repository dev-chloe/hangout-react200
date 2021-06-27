var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// http get 방식으로 request 호출을 받으면
// res.send 함수가 텍스트 데이터를 response로 전송한다.
// req=reguest
// res=response