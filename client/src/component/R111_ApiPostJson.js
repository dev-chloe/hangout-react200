import React, { Component } from 'react';
const axios = require('axios');

class R111_ApiPostJson extends Component {
  componentDidMount () {
    axios.post('/users', {})
    .then( response => {
      console.log("response.data.message : "+response.data.message)
    })
  }
  render () {
    return (
      <>
        <h1>Call Node Api Post</h1>
      </>
    )
  }
}

export default R111_ApiPostJson;

/*
  .axios를 사용해 post 방식으로 node api를 호출한다.
  json 데이터의 key 값인 message로 접근해 value 값 node post success를 로그로 출력한다.
*/