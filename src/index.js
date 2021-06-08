import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
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
 * redux 적용
 */
const store = createStore(reducers);
// redux 패키지에서 스토어 생성 함수 createStore 임포트하고,
// 파라미터로 reducers 폴더 경로로 넘긴다. 
// reducers 폴더의 index.js에는 데이터 초깃값을 설정하고 데이터를 변경해주는 함수가 있는데
// 이 함수를 '리듀서'라고 한다.


const listener = () => {
  ReactDOM.render(
    <App store={store} />,
    // store를 App 컴포넌트에 전달하고 render 함수를 listener 함수 내부에 위치시킨다.
    // store를 구독하면 store 내부의 데이터가 변화가 있을 때 listener 함수 내부의 render 함수를 실행하고 render 함수를 실행시켜준다.
    document.getElementById('root')
  )
}

store.subscribe(listener);
listener();

/* 
  redux는 컨텍스트와 마찬가지로 데이터를 필요한 컴포넌트에서만 요청해 사용할 수 있다.
  컨텍스트는 부모 컴포넌트에서 생상한 데이터에 모든 자식 컴포넌트에서 접근할 수 있지만
  redux에서는 컴포넌트 외부의 스토어라는 곳에서 관리한다.
  컴포넌트 위치에 상관없이 스토어에 접근하여 데이터를 사용하고 변경 가능하다.

  redux 적용 전후 비교
  https://raw.githubusercontent.com/dev-chloe/hangout-react200/main/img/react-vs-redux.png
*/