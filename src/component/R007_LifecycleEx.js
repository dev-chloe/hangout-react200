import React, { Component } from 'react';

class R007_LifecycleEx extends Component {
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
  }

  render() {
    console.log('3. render call');
    return (
      <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION]</h2>
    )
  }
}

export default R007_LifecycleEx;

//결과
// 1. constructor call
// 2. getDerivedStateFromProps call :FromApp.js
// 3. render call
// 4. componentDidMount call 
// 5. tmp_state : FromApp.js

// componentDidMount() 가장 마지막에 실행되어 화면이 모두 그려진 후 실행돼야 하는 이벤트 철, 초기화 등 가장 많이 활용됨