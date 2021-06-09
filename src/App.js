import React, { Component } from 'react';
import './App.css';
import StrAddButton from './StrAddButton';

// function App() {
//   return (
//     <div className="cont_box">
//       <h1>Start React 200!</h1>
//       <p>HTML, CSS 적용하기</p>
//       <ContextApi />
//     </div>
//   );
// }

/* 
 * redux 적용
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{ this.props.store.getState().data.str }</span>
        {/* 
          props를 통해 index.js에서 전달받은 store에 접근한다.
          스토어 state 데이터에서 str 변수값을 가져온다.
         */}
        <StrAddButton store={ this.props.store } />
        {/* 
          버튼 컴포넌트 StrAddButton에 store를 전달한다.
        */}
      </div>
    )
  }
}


export default App;

/*
  props에 스토어에 담아 하위 컴포넌트로 전달하면, 전달받은 컴포넌트에서 스토어에 접근할 수 있다.
  컴포넌트에서 dispatch 함수를 사용하면 스토어에 데이터를 변경할 수 있다.
*/