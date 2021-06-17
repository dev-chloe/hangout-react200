import React, { Component } from "react";

class R070_onMouseOut extends Component {
  MouseOut(tag) {
    console.log('TAG : ' + tag);
  }

  // MouseOut이라는 함수를 선언하고 전달받은 파라미터를 tag라는 함수의 내부 변수에 넣어 사용한다.
  // tag 변수를 로그로 출력한다.

  render() {
    return (
      <>
        <div onMouseOut={ e => this.MouseOut("div") }>
          <h3>DIV onMouseOut</h3>
        </div>
        <input type="text" onMouseOut={ e => this.MouseOut("input") }/>
        <select onMouseOut={ e => this.MouseOut("select") }>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    )
  }
}

export default R070_onMouseOut;