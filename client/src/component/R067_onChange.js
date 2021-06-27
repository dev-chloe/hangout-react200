import React, { Component } from "react";

class R067_onChange extends Component {
  change = (e) => {
    let val = e.target.value;
    console.log('param : ' + val);
  }

  // change 라는 함수를 선언하고 전달받은 파라미터를 e라는 함수의 내부 변수에 넣어 사용한다.
  // 이벤트 객체 변수 e에 target 속성을 붙여 value값을 가져오고 val 변수에 할당한다.
  //  val 변수를 로그로 출력한다.
  // input 박스에 문자를 입력 및 삭제 할때마다 onChange 이벤트가 발생해 change 함수를 호출한다.
  // 함수 호출 시 파라미터를 따로 넘겨 주지 않아도 이벤트 객체가 전달된다.
  // select 박스 선택된 option이 달라질때마다 onChange 이벤트가 발생해 change 함수를 호출한다

  render() {
    return (
      <>
        <input type="text" onChange={this.change} />
        <select onChange={this.change}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    )
  }
}

export default R067_onChange;