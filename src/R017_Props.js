import React, { Component } from 'react';

class R017_Props extends Component {
  render() {
    let props_value = this.props.props_val;
    props_value += ' from App.js'
    // 자식 컴포넌트에서는 전달 밭은 props 데이터를 수정할 수 없다.
    // this.props 뒤에 상위 컴포넌트를 전달 밭은 props 변수명을 붙이면 해당 데이터를 사용 가능하다
    // 데이터 수정은 props 자체가 아닌 컴포넌드 내부 변수(props-value)에 옮겨 가공해
    // THIS IS PROPS from App.js라고 변경 가능
    props_value = "Can change like this"
    // Can change like this
    return (
      <div>{props_value}</div>
    )
  }
}

export default R017_Props;