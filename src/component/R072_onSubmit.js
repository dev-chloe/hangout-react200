import React, { Component } from "react";

class R072_onSubmit extends Component {
  Submit(e) {
    let inputValue = document.getElementById("inputId").value;
    console.log("inputValue : " + inputValue);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.Submit}>
        <input type="text" name="inputName" id="inputId"/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

// form 태그 안에 있는 type이 submit인 input 태그를 틀릭하거나 input 태그에 커서를 놓고 entder를 누르면 onSubmit 이벤트가 발생한다
// Submit이라는 함수를 선언하고 id값이 inputId인 태그의 value 값을 inputValue 변수에 할당한다.
// inputValue를 로그로 출력한다. 
// 이벤트 객체 e에 preventDefault 함수를 실행하면, submit 이후에 페이지 새로 고침을 방지 할 수 있다.

export default R072_onSubmit;