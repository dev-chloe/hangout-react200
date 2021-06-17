import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R089_reactRouter';
import reactRouter2 from './R089_reactRouter2';


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
        <Route exact path='/' component={reactRouter} />
        <Route exact path='/reactRouter2' component={reactRouter2} />
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