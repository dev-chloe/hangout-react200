import React, { Component } from "react";

class R065_Promise extends Component {
  componentDidMount() {
    new Promise((resolve, reject) => {
      reject(Error("ERROR Info"));
    })
    .then( result => console.log("then " + result ))
    .catch( result => console.log("catch : " + result ));
  }

  render() {
    return (
      <h1>Promise</h1>
    )
  }
}

// Promise 라는 객체를 생성해 promise를 사용한다.
// 파라미터로 2개의 함수를 받으면 첫번째 함수(resolve)는 이행 함수, 두 번째 함수(reject)는 거부 함수로 사용된다
// 거부 함수 reject를 실행하면서 Error 객체를 사용해 에러를 발생시킨다
// promise 동작 중 거부 함수가 실행되면 이생 상태가 되지 못하므로 then  함수는 실행 되지 않고 
// 상태가 거부로 변해 catch 함수가 실행되어 reject함수에서 파라미터로 전달 받은 에러 정보를 출력한다.
// catch : Error: ERROR Info

export default R065_Promise;