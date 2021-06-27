import React, { Component } from "react";

class R073_ReactRef extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
    // createRef 함수로 Ref 변수 inputRef를 생성한다.
  }

  RefFocus = (e) => {
    this.InputRef.current.focus();
  }

  JavascriptFocus() {
    document.getElementById('id').focus();
  }

  render() {
    return (
      <>
        <input id="id" type="text" ref={this.InputRef} />
        {/* 
          element에 ref 속성을 추가하고 Ref 변수에 inputRef를 할당해 참조하도록 한다.
          참조에 대한 정보가 ref의 current라는 속성을 할당된다.
        */}
        <input type="button" value="Ref Focus" onClick={this.RefFocus} />
        {/* 
          버튼을 클릭하면 RefFocus 함수가 실행된다. input 태그가 참조하고 있는 inputRef.current에 접근하여 foucs 이벤트를 발생시틴다.
        */}
        <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus} />
        {/* 
          버튼을 클릭하면 JavascriptFocus 함수가 실행된다. Javascript를 사용해 id 값으로 input 태그에 접근해 focus d이벤트를 발생시킨다.
          RefFocus 함수와 JavascriptFocus 함수는 동일하게 작동해 input 박스에 foucs이벤트로 outline이 처리된다.
        */}
      </>
    )
  }
} 

export default R073_ReactRef;

// Ref를 사용하면 element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다.