import React, { Component } from "react";
import withHocComponent from './withHocComponent';
// 같은 Hoc 폴더 경로에 있는 withHocComponent를 인포트한다.

class R075_ReactHoc extends Component {
  render() {
    console.log('2. HocComponent render')
    return (
      <h2>props.name: {this.props.name}</h2>
    )
  }
}
// #L6-L11 render 함수가 실행되면, 로그클 출력하고 props데이터에 있는 name 변수를 화면에 그려준다.

export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc');
// withHocComponent 컴포넌트를 호출하면서 R075_ReactHoc 컴포넌트와 컴포넌트 명을 파라미터로 넘긴다.
// 이때 R075_ReactHoc는 익스포트 되지 않기 때문에 render 함수가 실행되지 않는다.