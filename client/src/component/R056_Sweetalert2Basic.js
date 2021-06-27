import React, { Component } from "react";
import Swal from "sweetalert2";

class R056_Sweetalert2Basic extends Component {
  componentDidMount() {
    Swal.fire('1. SweetAlert')
    alert('2. alert()')
    // alert 이 먼저 실행됨 
    // sweetalert2는 비동기로 동작해 Swal.fire() 함수를 실행시켜 놓고 완료 여부에 상관없이 다음 코드 를 실행하기 때문이다.
    // alert은 동기적으로 작동하므로 확인 버튼을 누르지 않으면 다음 작업으로 넘어가지 않는다.

    // 동기는 요청과 결과가 동시에 일어나고
    // 비동기는 요청과 결과의 작업 처리 단위를 맞추지 않는다는 뜻이다.

    Swal.fire('1. SweetAlert').then(result => {
      alert('2.result.value : ' + result.value)
    })
    // sweetalert2를 동기적으로 사용하기 위해 프로미스의 then() 함수를 사용해 Swal.fire()의 결괏값이 반환되었을때
    // alert을 실행시킨다.

    // 프로미스란, 비동기 함수를 동기적으로 사용할 수 있도록 하는 개념
    // 프로미스 함수 중 then은 이전 함수가 완전히 완료됐을 때 실행된다.
  }

  render() {
    return (
      <h1>sweetalert2</h1>
    )
  }
}

export default R056_Sweetalert2Basic;