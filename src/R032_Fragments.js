import React, { Component } from 'react';

class R032_Fragments extends Component {
  render() {
    return (
      <React.Fragment>
        <p>P TAG</p>  
        <span>SPAN TAG</span>
      </React.Fragment>
    )
  }
}


// element 반환 시 하나의 <html> 태그로 감싸지 않으면 다음과 같은 에러 메시지가 표시된다.
// Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <ㅗ>...</ㅗ>?

// Fragment 약식으로 <> </> 로 쓸수있다.

export default R032_Fragments;