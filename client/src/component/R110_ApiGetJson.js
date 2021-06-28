import React, { Component } from 'react';

class R110_ApiGetJson extends Component {
  componentDidMount = async () => {
    const response = await fetch('/users');
    const body = await response.json();
    console.log("body.message : " + body.message)
  }

  render () {
    return (
      <>
        <h1>Call Node Api Get</h1>
      </>
    )
  }
}

export default R110_ApiGetJson;

/*
  .text가 아닌 .json 함수로 json 형태의 데이터를 body 변수에 할당한다.
  json 데이터의 key 값인 message로 접근해 value 값 node get success를 로그로 출력한다.
*/