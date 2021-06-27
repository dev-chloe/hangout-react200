import React from 'react';

// R075_ReactHoc 컴포넌트의 
// export default withHocComponent(R075_ReactHoc, 'R075_ReactHoc'); 에서
// withHocComponent 컴포넌트를 익스포트 하면서 잔달 받은 파라미터를 받는다.

export default function withHocComponent(Incomponent, InComponentName) {
  // 파라미터로 전달 받은 Incomponent 변수는 R075_ReactHoc 컴포넌트 자체다.
  return class OutComponent extends React.Component {
    componentDidMount() {
      console.log(`3. InComponentName : ${InComponentName}`)
      // render 함수가 실행된 후 파라미터로 전달받은 컴포넌트명 InComponentName변수를 로그로 출력한다.
    }
    render() {
      console.log('1. Incomponent render')
      return (<Incomponent {...this.props} />)
      // R075_ReactHoc 컴포넌트를 return하면서 props 값을 전달한다.
      // propsdpsms App.js에서 전달한 name 변수가 있다. 
      // 컴포넌트가 return 되면 R075_ReactHoc 컴포넌트의 render 함수가 실행되고 props.name 값이 화면에 출력된다.
    }
  }
}

// ** 하이오더 컴포넌트를 구현하면, 여러 컴포넌트에 동일하게 적용돼야 하는 공통 기능을 코드 중복 없이 사용 가능하다. **