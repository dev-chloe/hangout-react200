import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/* 
 * redux 미들웨어 적용
 */

const CallMiddleware = store => nextMiddle => action => {
  /* 
    applyMiddleware 함수에 전달될 함수는 다중 컬링 구조로, 세 가지 인사를 순서대로 받는다. 
    첫 번째 인자는 스토어, 두 번째 인다는 다음 미들웨어를 호출하는 함수로 예제어서는 미들웨어가 1개이므로 리듀서를 호출한다.
    세번째 인자는 액션이다.
  */
  console.log('1. redcer 실행 전');
  console.log('2. action.type : ' + action.type + ', store str : ' + store.getState().data.str);
  let result = nextMiddle(action);
  // 실행할 미들웨어가 없으므로 리듀서를 실행한다
  console.log('3. redcer 실행 후');
  console.log('4. action.type : ' + action.type + ', store str : '+ store.getState().data.str);
  return result;
}


const store = createStore(reducers, applyMiddleware(CallMiddleware));
// createStore 함수의 두번째 파라미터를 applyMiddleware 함수로 전달한다.
// applyMiddleware 함수의 파라미터로 새로 정의해 사용할 미들웨어 함수명(CallMiddleware)을 넣는다.

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App indexProp="react" />
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(listener);
listener();

/*
  redux 미들웨어는 액션을 dispatch 함수로 전달하고 리듀서가 실행되기 전과 실행된 후에 처리되는 기능을 말한다.
  redux 패키지에서 지원하는 applyMiddleware 함수를 사용하면 미들웨어를 간단하게 구현할 수 있다.
*/
/*
  1. redcer 실행 전
  2. action.type : ADD, store str : react
  Props from index.js : react
  3. redcer 실행 후
  4. action.type : ADD, store str : react200
*/