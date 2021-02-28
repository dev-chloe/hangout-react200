import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps call :' + props.prop_value);
    return { tmp_state: props.prop_value };
  }
  constructor(props) {
    super(props);
    this.state = {};
    console.log('1. constructor call');
  }

  componentDidMount() {
    console.log('4. componentDidMount call');
    console.log('5. tmp_state : ' + this.state.tmp_state);
    this.setState({ tmp_state2: true });
  }

  shouldComponentUpdate(props, state) {
    console.log('6. shouldComponentUpdate call / tmp_state2 = ' + state.tmp_state2);
    return state.tmp_state2
  }

  render() {
    console.log('3. render call');
    return (
      <h2>[THIS IS shouldComponentUpdate FUNCTION]</h2>
    )
  }
}

export default R008_LifecycleEx;

// 결과
// 1. constructor call
//  2. getDerivedStateFromProps call :FromApp.js
//  3. render call
//  4. componentDidMount call
//  5. tmp_state : FromApp.js
//  2. getDerivedStateFromProps call :FromApp.js
//  6. shouldComponentUpdate call / tmp_state2 = true
//  3. render call

// componentDidMount() 가장 마지막에 실행
// state의 변경이 발생하여 '변경 단계의 생명주기 함수 shouldComponentUpdate()가 실행
// shouldComponentUpdate()는 boolean 유형의 데이터를 반환하는데 return 값이 true 일 경우 render() 함수를 한번 더 호출함
/*
shouldComponentUpdate() 함수의 반환 값에 따라 render() 함수를 재실행 할 수 있다는 점을 이용하면
props나 state 변수가 변경될 때 화면을 다시 그리며 제어할 수 있다
*/