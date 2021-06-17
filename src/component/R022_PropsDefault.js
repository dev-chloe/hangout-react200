import React, { Component } from 'react';

class R022_PropsDefault extends Component {
  render() {
    let {
      ReactString, 
      ReactNumber
    } = this.props
    return (
      <div>
        {ReactString}{ReactNumber}
      </div>
    )
  }
}

R022_PropsDefault.defaultProps= {
  ReactString: "리액트",
  ReactNumber: 400
  // ReactString 와 ReactNumber 변수에 각각 기본값을 할당했다.
  // ReactString는 비어 있기 때문에 지정한 기본값(리액트)이 화면에 표시되지만 
  // ReactNumber는 상위 컴포넌트에서 전달 받은 값(200)이 있으므로 지정 기본값을 무시한다.
}

export default R022_PropsDefault;