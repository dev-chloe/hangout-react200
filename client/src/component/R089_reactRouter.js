import React, { Component } from "react";
import { Link } from "react-router-dom";

class R089_reactRouter extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>R089_reactRouter</h3>
        <Link to={'/reactRouter2'}>reactRouter2</Link>
        {/* 
          <Link> 태그를 추가하고 to 속성에 연결할 path를 입력한다.
          이때 path는 App.js의 <Route> 태그에서 특정 컴포넌트로 라우팅 처리가 돼 있어야 한다.
          개발자 도구의 [Elements] 탭에서 <Link> 태그의 코드로 보면 <a> 태그 인것을 확인 할 수 있다.
        */}
      </>
    )
  }
}

export default R089_reactRouter;

// 단순히 path 별로 라우팅을 잘했는지 확인하기 위해 path와 컴포넌트명을 화면에 출력한다.
// 루트 경로로 호출했을 때는 R089_reactRouter 컴포넌트가 연결된다.
// /reactRouter2 경로로 호출했을 때는 R089_reactRouter2 컴포넌트가 연결된다.

// Link는 <a> 태그와 동일하게 작동한다. 
// <Route> 태그에 정의한 path를 Link 속성에 연결해 놓으면, 링크를 클릭했을 때 라우팅된 컴포넌트로 이동한다.
