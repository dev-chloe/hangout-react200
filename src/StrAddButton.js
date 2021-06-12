import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from './actions';

class StrAddButton extends Component {
  render () {
    return (
      // <input value='Add200' type="button" onClick={this.addString} />
      <input value="Add200" type="button" onClick={this.props.addString} />
      // 버튼을 클릭하면 props에 할당된 addString 함수를 실행한다.
    )
  }

  // addString = () => {
  //   this.props.store.dispatch(add());
  // }
  // 기존 addString 함수는 dispatch 함수를 호출하기 위해 컴포넌트 내에 새로운 함수를 선언했지만 두 함수를 바인딩했기 때문에 별도의 함수 선언은 불필요하다.
}

let mapDispatchToProps = (dispatch, props) => {
  // mapDispatchToProps 함수는 첫 번째 파라미터로 dispatch 함수를 두번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다.
  console.log('Props from App.js : ' + props.AppProp)
  // App.js에서 전달한 props변수 AppProps를 콘솔에 출력한다.
  return {
    addString: () => dispatch(add())
    // dispatch 함수를 컴포넌트 내 함수인 addString에 바인딩한다. 이때 addString 함수는 props에 할당된다.
  };
};  

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);
// connect 함수의 두번째 파라미터는 mapDispatchToProps 함수로, 리듀서에 액션을 전달하는 함수인 dispatch를 인자로 받아 사용한다.

export default StrAddButton;

// connect 함수의 두 번째 파라미터 mapDispatchToProps 함수로, dispatch 함수를 컴포넌트 함수에 바인딩할 수 있다.
// 컴포넌트 함수가 실행되면 바인딩된 dispatch 함수가 실행된다.