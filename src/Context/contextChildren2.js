import React from 'react';
import { Consumer } from './R076_ContextApi';
// 부모 컴포넌트의 데이터를 사용하기 위해 R076_ContextApi 컴포넌트에서 익스포트했던 Consumer를 임포트해 사용할 수 있게 한다.

class contextChildren2 extends React.Component {
  render() {
    return (
      <Consumer>
        { contextValue => <h3>{ `contextValue : ${contextValue}` }</h3> }
      </Consumer>
      // <Consumer> 태그로 출력할 element를 감싸고 R076_ContextApi 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 출력한다.
      // 몇 번째 하위 컴포넌트인지는 상관없이 필요한 하위 컴포넌트에서 소비자를 임포트해 필요한 데이터를 사용할 수 있다.
    )
  }
}

export default contextChildren2;