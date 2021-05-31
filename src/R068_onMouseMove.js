import { Component } from "react";

class R068_onMouseMove extends Component {
  MouseMove(tag) {
    console.log('TAG : ' + tag);
  }

  // MouseMove 함수 선언후 전달받은 파라미터를 tag라는 함수의 내부 변수에 넣어 사용한다.
  // tag 변수를 로그로 출력한다.
  // <div> 태그 영역에서 마우스 커서가 움직일 경우 MouseMove 함수를 호출하고 파라미터로 넘긴 div가 출력된다.

  render() {
    return (
      <>
        <div onMouseMove={ e => this.MouseMove("div")}>
          <h3>DIV onMouseMove</h3>
        </div>
        <input type="text" onMouseMove={ e => this.MouseMove("input")} />
        <select onMouseMove={ e => this.MouseMove("select")}>
          <option value="react">react</option>
          <option value="200">200</option>
        </select>
      </>
    )
  }
}

export default R068_onMouseMove;