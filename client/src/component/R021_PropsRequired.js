import React, { Component } from "react";
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
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

R021_PropsRequired.propTypes = {
  ReactString : datatype.isRequired,
  // ReactString 를 props 값을 필수 값으로 지정한다.
  // 상위 컴포넌트에서 ReactString 이라는 변수를 전달하지 않아서
  // Failed prop type: R021_PropsRequired: prop type `ReactString` is invalid; it must be a function, usually from the `prop-types` package, but received `undefined`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.
  // 이런 경고 메시지가 뜨고 상위 컴포넌트에서 전달 받은 ReactNumber 변수값 200은 출력이 된다.
}

export default R021_PropsRequired;