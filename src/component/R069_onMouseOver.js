import React, { Component } from "react";

class R069_onMouseOver extends Component {
  MouseOver(tag) {
    console.log('TAG : ' + tag);
  }

  // MouseOverㄹㅏ는 함수를 선언하고 전달 받은 파라미터를 tag라는 함수의 내부 변수에 넣어 사용한다.
  // tag 변수를 로그로 출력한다.

  render() {
    return (
      <>
        <div onMouseOver={ e => this.MouseOver("div")}>
          <h3>DIV onMouseOver</h3>
        </div>
        <input type="text" onMouseOver={ e => this.MouseOver("input")} />
        <select onMouseOver={ e => this.MouseOver("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    )
  }
}

export default R069_onMouseOver;