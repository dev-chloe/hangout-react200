import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
  render() {
    let {
      BooleanTrueFalse
    } = this.props
    // props 값을 Boolean 형으로 하위 컴포넌트에 전달할 경우, true나 false 중 하나를 할당한다
    // 할당하지 않을 경우 true가 기본 값이다.
    return (
      <div>
        {BooleanTrueFalse ? '2. ' : '1. '}
        {/* 1. false */}
        {/* BooleanTrueFalse 변수가 true 이면 2, false 이면 1을 출력한다 */}
        {BooleanTrueFalse.toString()}
         {/* 2. true */}
         {/* Boolean 변수는 화면에 직접 출력이 되지 않으므로 toString() 함수를 이용하여 문자열로 변환한다. */}
      </div>
    )
  }
}

export default R019_PropsBoolean;