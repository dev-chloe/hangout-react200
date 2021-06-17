import axios from "axios";
import React, { Component } from "react";

class R062_AxiosPost extends Component {
  componentDidMount() {
    axios.post('http://date.jsontest.com/', {
      a: "react" ,
      b: 200
    })
    .then( response => {alert(response.data.date)})
  }

  // axios.post('호출 url',json 데이터)문법으로 post 방식의 http 호출을 한다.
  // json 데이터는 {key1: value, key2: value} 형태로 사용하고
  // http bosy에 담겨 전송된다.
  // url 호출이 완료되면 then 함수가 실행되고 response가 그 결과로 반환된다

  render () {
    return (
      <h1>axios post</h1>
    )
  }
}

export default R062_AxiosPost;