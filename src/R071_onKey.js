import React, { Component } from "react";

class R071_onKey extends Component {
  OnKey(event, e) {
    let val = e.target.value;
    console.log('event : ' + event + ", value : " + val);
  }
  // OnKey라는 함수를 선언한 후 파라미터로 event, e 변수를 받는다.
  // event는 문자열, e는 이벤트 객체 유형으로 전달받는다.

  // 이벤트 객체 변수 e에 target 속성을 붙여 value 값을 가져오고 val 변수에 할당한다.
  // event, val 변수를 로그로 출력한다.
  render() {
    return (
      <>
        onKeyDown: <input type="text"
        onKeyDown={ e => this.OnKey("onKeyDown", e) }/> <br />
        onKeyPress : <input type="text"
        onKeyPress={ e => this.OnKey("onKeyPress", e) }/> <br />
        onKeyUp : <input type="text"
        onKeyUp={ e => this.OnKey("onKeyUp", e) }/>
      </>
    )
  }
}

export default R071_onKey;

// onKeyDown와 onKeyUp은 키를 누르고 떼는 동작 자체에 반응한다. 문자, 숫자, Cfrl,Shift, Alt, F1~F12, ScrollLock, Pause, Enter를 인식하고
// 한영, printscreen은 인식하지 못한다.

// onKeyPress는 onKeyDown와 달리, 문자가 실제로 입력됐을 때 반응한다.
// Cfrl,Shift, Alt, F1~F12, ScrollLock, Pause, Enter, 한영, printscreen등을 인식하지 못한다.