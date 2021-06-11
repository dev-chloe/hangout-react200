import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
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
 * react-redux 적용
 */
class App extends Component {
  render() {
    return (
      <div>
        <h1>Start React 200!</h1>
        {/* <span>{ this.props.store.getState().data.str }</span><br />
        <StrAddButton store={ this.props.store } /> */}
        <span>{this.props.str}</span>
        {/* 
          str 변수로 할당한 값을 화면에 출력한다. redux를 사용하던 것과 비교하면 컴포넌트 내에 코드가 짧아진 것을 확인할 수 있다.
          접근하는 스토어 변수가 많아질수록 코드 효율이 좋아진다.
        */}
        <StrAddButton AppProp="200" />
        {/* 
          기존 코드에서는 하위 버튼 컴포넌트에 store를 props로 다시 전달했지만, index.js에서 Propvider를 사용했기 때문에 전달하지 않아도 된다.
          StrAddButton 컴포넌트에서 사용할 변수 AppProp에 200 문자열을 할당해 props로 전달한다.
        */}
      </div>
    )
  }
}

let mapStateToProps = (state, props) => {
  // mapStateToProps 함수는 첫 번째 파라미터로, 스토어의 state 변수를 두 번째 파라미터로 부모 컴포넌트에서 전달한 props 변수를 받는다.
  console.log('Props from index.js : ' + props.indexProp)
  // index.js에서 전달한 props 변수 indexProp를 콘솔에 출력한다.
  return {
    str : state.data.str,
  }
  // 스토어의 state 변수 str 값을 App 컴포넌트 props의 str 변수 할당한다.
}

App = connect(mapStateToProps, null)(App);
// connect 함수의 첫 번째 파라미터는 mapStateToProps 함수로, 스토어의 state 값에 접근할 수 있다.

export default App;

/*
  react-redux 패키지의 connect 함수는 파라미터를 4개까지 받을 수 있는데, 파라미터 위치에 따라 미리 정의된 함수나 object를 사용할 수 있다.
  첫번째 파라미터는 스토어의 상태 값을 컴포넌트 props에 할당하는 함수이다.
  두번째 파라미터는 dispatch 함수를 컴포넌트 함수에 바인딩 하는 함수다.
*/