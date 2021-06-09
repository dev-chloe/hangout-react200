import React, { Component } from 'react';
import { add } from './actions';
// actions 폴더의 index.js 파일에는 add라는 함수가 있다.

class StrAddButton extends Component {
  render () {
    return (
      <input value='Add200' type="button" onClick={this.addString} />
      // 버튼을 클릭하면 addString 함수를 실행한다.
    )
  }

  addString = () => {
    this.props.store.dispatch(add());
    // dispatch 함수를 통해 add 함수의 반환 값을 스토어에 전달한다.
    // 이때 add 함수 type 값을 리듀서에서 참고해 스토어 데이터를 변경한다.
    // 결론적으로 dispatch 함수는 리듀서에 액션을 전달하고 리듀서에서는 액션에 작성된 작업 내용을 읽어 스토어 데이터를 변경한다.
  }
}

export default StrAddButton;