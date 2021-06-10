import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
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
 * react-redux 적용
 */
const store = createStore(reducers);

const listener = () => {
  ReactDOM.render(
    <Provider store={store}>
      {/* 
        store 상속을 위한 Provider 태그로 App 컴포넌트를 감싸는 부분이 변경되었다.
        Provider에 데이터를 넘겨주면 중간 컴포넌트에서 props 값을 다시 전달해줄 필요없이 모든 하위 컴포넌트에서 데이터를 사용할 수 있다.
        컨텍스트 api에서 사용했던 Provider와 동일한 기능을 한다.
      */}
      <App indexProp="react" />,
      {/* App 컴포넌트에서 사용할 변수 indexProp에 react 문자열을 할당해 props로 전달한다. */}
    </Provider>,
    document.getElementById('root')
  )
}

store.subscribe(listener);
listener();

/*
  redux만 사용해도 충분히 스토어 데이터를 사용하고 변경할 수 있지만 
  react-redux는 redux를 react와 연동해서 사용하기 편리하도록 만든 라이브러리다.

  react-redux의 장점
  1. store를 하위 컴포넌트에 매번 상속하지 않고 사용가능하다.
  2. 스토어 데이터를 사용, 변경하는 코드를 모듈화해 컴포넌트 내에 중복된 코드 사용을 최소화 가능하다.
*/