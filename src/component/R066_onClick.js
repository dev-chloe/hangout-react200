import React, { Component } from "react";

class R066_onClick extends Component {
  buttonClick = (param) => {
    if(typeof param != 'string') param = "Click a"
    // param 변수가 문자열이 아니라면, Click a라는 문자열을 param 변수에 할당한다.
    console.log('param : ' + param)
    // param 변수를 로그로 출력한다.
  }

  render() {
    return (
      <>
        <button onClick={e => this.buttonClick("Click button")}>Click button</button>
        {/* param : Click button */}
        <div onClick={e => this.buttonClick("Click div")}>Click div</div>
        {/* param : Click div */}
        <a href="javascript:" onClick={this.buttonClick}>Click a</a>
        {/* param : Click a */}
        {/* 
        사용자가 특정 태그 영역을 클릭할때 마다  buttonClick 함수를 호출하고
        서로 다른 파라미터(Click button, Click div)를 전달한다.
        button과 div 에는 파라미터를 받는 것으로 선언되어 있지만
        a 에서는 파라미터 없이 함수를 호출해도 정상적으로 동작한다.
        */}
      </>
    )
  }
}

export default R066_onClick;