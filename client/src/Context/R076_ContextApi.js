import React from 'react';
import Children from './contextChildren';
// 같은 폴더 경로에 있는 contextChildren 컴포넌트를 사용할 수 있도록 임포트 한다.

const { Provider, Consumer } = React.createContext();
export { Consumer }
// 리액트 기본 제공 함수인 creactContext를 호출하고 공급자 Provider와 소비자 Consumer를 받아 사용할 수 있게 한다.

class R076_ContextApi extends React.Component {
  render() {
    return (
      <Provider value="React200">
        <Children/>
      </Provider>
      // 하위 컴포넌트에서 소비자를 사용할 수 있또록 익스포트한다.
      // 자식 컴포넌트를 <Provider> 태그로 감싸고 전달할 데이터를 value 값으로 할당한다.
    )
  }
}

export default R076_ContextApi;

// 컨텍스트 api 사용
// props를 사용하면 데이터를 부모 컴포넌트에서 자식 컴포넌트로 전송 가능한데 
// 손자 컴포넌트가 부모 컴포넌트의 데이터가 필요로 한다면, 자식 컴포넌트가 중간에서 데이터를 전달해야 한다.
// 자식 컴포넌트가 부모 컴포넌트의 데이터가 필요하지 않은 상황이라면 불필요한 코드를 작성하게 되는데 컨텍스트는 데이터의 공급자와 소비자를 정의하고 
// 데이터가 필요한 컴포넌트만 사용할 수 있게 구현 할 수 있다.