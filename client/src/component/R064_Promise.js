import React, { Component } from "react";

class R064_Promise extends Component {
  componentDidMount(){
    new Promise(resolve => {
      setTimeout(function() {
        resolve('react');
      }, 1500);
    })
    .then(function(result) {
      console.log(result);
      return result + 200;
    })
    .then(result => {
      console.log(result);
    })
  }

  render() {
    return (
      <h1>Promise</h1>
    )
  }
}

// promist에는 대기, 이행, 거부의 개념이 있다. 대기 상태에서 이행 상태로 변할 때 than 함수 안의 코드가 실행된다.
// Promise 라는 객체를 생성해 promise를 사용한다
// 파라미터로 하나의 함수(resolve)만 받을 경우 이행 함수로 사용된다
// timeout 함수를 실행해 1.5초 후 resolve 함수가 실행된다.
// promise는 이행 상태가 되고 다음 then 함수가 실행된다.
// resolve 함수에서 파라미터로 전달된 결괏값 react를 result라는 파라미터로 받아 사용하고
// result 변수에 200을 붙여 반환한다. 
// 반환되는 순간 대기하고 있던 마지막 then 함수가 실행된다

export default R064_Promise;