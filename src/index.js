import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
/*
  App.js는 라우팅 전용 컴포넌트로 사용될 것이다. 
  App 컴포넌트와 하위 컴포넌트에서 Route, Link를 사용할 때마다 <BrowserRouter> 태그를 감싸서 사용할 수도 있다
  최상위 컴포넌트 App 컴포넌트를 <BrowserRouter> 태그 안에 위치시키면 하위 모든 컴포넌트에서 라우팅 기능(Route, Link)을 사용 할 수 있다.
*/
serviceWorker.unregister();

/* 
  라우팅은 호출되는 url에 따라 페이지 이동을 설정하는 것이다.
  react에서 view는 component를 사용한다.

  react-router-dom 패키지는 BrowserRouter, Route, Link의 기능을 제공한다.
  Route는 호출되는 url에 따라 이동할 component를 정의한다. 
  Link는 <a>  태그와 같이 페이지에 표시되는 링크를 클릭하면 url을 호출한다.
  Route와 Link를 사용하기 위해서는 <BrowserRouter> 태그로 감싸서 사용해야 한다.
*/