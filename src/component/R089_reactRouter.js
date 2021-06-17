import React, { Component } from "react";

class R089_reactRouter extends Component {
  render() {
    return (
      <>
        <h1>path='/'</h1>
        <h3>R089_reactRouter</h3>
      </>
    )
  }
}

export default R089_reactRouter;

// 단순히 path 별로 라우팅을 잘했는지 확인하기 위해 path와 컴포넌트명을 화면에 출력한다.
// 루트 경로로 호출했을 때는 R089_reactRouter 컴포넌트가 연결된다.
// /reactRouter2 경로로 호출했을 때는 R089_reactRouter2 컴포넌트가 연결된다.
