import React, { Component } from 'react';

class R026_ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state= {
      StateString: 'react',
    }
  }

  StateChange = () => {
    this.state.StateString = '리액트';
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <button onClick={(e) => {this.StateChange('direct,e')}}>state 직접 변경</button>
        [state 변경하기] StateString: {this.state.StateString}
        {/* 버튼을 누르면 this.state 변수명 =value 문법으로 state를 직접 변경하여
            StateString 값은 '리액트'로 변경된다.
            orceUpdate()가 화면을 강제로 새로고침하여 render() 함수를 다시 실행시켜 변경된 state 값을 표시한다.
        */}
      </div>
    )
  }
}

export default R026_ForceUpdate;