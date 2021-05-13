import React, { Component } from 'react';

class R024_ReactState extends Component {
  constructor (props) {
    super(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200
    }
  }
  // constructor 안에서 state 변수의 초깃값을 정의한다.
  // StateString 변수에는 props로 전달된 reactString 값(react)을 저장,
  // StateNumber 변수에는 숫자 200을 저장한다.
  render() {
    return (
      <div>
        {this.state.StateString}{this.state.StateNumber}
      </div>
    )
  }
}
// thisstate 변수명 문법으로 state 변수에 접근하여 state 값을 화면에 그대로 표시한다.
// react200
export default R024_ReactState;