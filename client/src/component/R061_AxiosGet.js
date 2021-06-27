import axios from "axios";
import React, { Component } from "react";

class R061_AxiosGet extends Component {
  componentDidMount() {
    axios.get('http://date.jsontest.com')
    .then(response => { 
      alert(response.data.date) 
      console.log(response)
      console.log(response.data)
    })
  }
  // axios.get('호출 url)문법으로 get 방식의 http 호출한다.
  // 호출이 완료되면 then 함수가 실행된다.
  // 호출의 결과로 response가 반환된다.
  // response와 호출된 변수명 사이에 date를 붙이면, 변수처럼 사용 가능하다.
  render() {
    return (
      <h1>axios get</h1>
    )
  }
}

export default R061_AxiosGet;