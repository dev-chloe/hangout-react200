import React, { Component } from "react";

class R063_CallbackFunc extends Component {
  componentDidMount() {
    this.logPrint(1, function(return1){
      console.log("return1 : " + return1);
      // 2. return1 : 2
      this.logPrint(return1, function(return2) {
        console.log("return2 : " + return2)
        // 4. return1 : 4
      })
    }.bind(this))
  }

  logPrint(param, callback) {
    console.log("logPrint param : " + param);
    // 1. logPrint param : 1
    // 3. logPrint param : 2
    param += param
    callback(param);
  }

  render() {
    return (
      <h1>Callback Function</h1>
    )
  }
}

// console.log("logPrint param : " + param);에서 실행된 callback 함수는
// function(return1){ .. }.bind(this)) 까지이다.
// this.logPrint(return1, function(return2) { .. }) 다시 한번 logPrint 함수를 실행하는데 
// 위의 첫번째 함수 실행에서 반환된 return1 값(2)를 파라미터로 전달한다. 
// this.logPrint(return1, function(return2) { .. })의 this는 function(return1){ .. }.bind(this))의 this와 다르다
// this로 logPrint 함수에 접근해 사용하려고 하면 에러가 발생한다.
// 함수 밖의 this를 함수 안에서도 동일하게 사용하기 위해서는 .bind(this)를 함수에 붙여준다

export default R063_CallbackFunc;