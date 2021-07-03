import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css';
import HeaderAdmin from './Header/HeaderAdmin';
import Footer from './Footer/Footer';
import ApiPostJson from './R111_ApiPostJson';

// function App() {
//   return (
//     <div className="cont_box">
//       <h1>Start React 200!</h1>
//       <p>HTML, CSS 적용하기</p>
//       <CookieRemove />
//     </div>
//   );
// }


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin /> 
        <Route exact path='/' component={ApiPostJson} />
        <Footer />
      </div>
    )
  }
}

export default App;

/*
  <Route> 태그에 path 속성은 호출되는 url 경로, component 속성은 연결할 컴포넌트를 할당한다.
  R089_reactRouter 컴포넌트를 루트 경로에 연결하고,
  R089_reactRouter2 컴포넌트를 /reactRouter2 경로에 연결한다.
*/

/*
  react-router-dom 패키지의 Route 기능을 사용하면, 호출되는 url에 따라 서로 다른 컴포넌트를 표시할 수 있다.
  하지만 header와 footer는 라우팅과 상관없이 항상 표시되어야 하는 영역이다.

  상단에 header가 하단에 footer 영역이 고정으로 위치하고 중간 영역에 라우팅되는 컴포넌트가 표시된다
  루트 경로에서 /reactRouter2 경로로 url을 이동해도 중간에 표시되는 컴포넌트 영역만 바뀐다.
*/

