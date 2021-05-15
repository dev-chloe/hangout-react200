import React, { Component } from 'react';

class R025_SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: 'react',
    }
  }
  // state 변수 StateString 의 초깃값을 react라는 문자열로 저장한다.
  // constructor 함수 실행후 render 함수에서 화면을 그리기 때문에 {this.state.StateString}는 react로 표시된다.

  StateChange = (flag) => {
    if(flag == 'direct') this.state.StateString = '리액트';
    if(flag == 'setstate') this.setState({StateString : '리액트'});
  }

  render () {
    return (
      <div>
        <button onClick={(e) => this.StateChange('direct', e)}>state 직접 변경</button>
        {/* state 직접 변경을 눌렀을 때 
            this.state.변수명=value 문법으로 sate를 직접 변경한다.
            StateString값은 '리액트'로 변경되지만 render 함수를 호출하지 않으므로 화면에는 이전 값인 'react'로 표시된다.
        */}
        <button onClick={(e) => this.StateChange('setstate', e)}>setState로 변경</button>
        {/* setState로 변경 을 눌렀을때 setState 함수로 state를 변경하고 StateString값은 '리액트'로 변경되고 
        reander 함수를 다시 호출해  화면에는 '리액트'가 표시된다*/}
        [state 변경하기] StateString: {this.state.StateString}
      </div>
    )
  }
}

export default R025_SetState;