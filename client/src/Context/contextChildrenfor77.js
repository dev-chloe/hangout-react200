import React from 'react';
import { Consumer } from './R077_ContextApi';

class contextChildrenfor77 extends React.Component {
  render() {
    return (
      <Consumer>
      {/* <Consumer> 태그로 출력할 element를 감싸고 R077_ContextApi 컴포넌트에서 value에 할당했던 데이터를 contextValue 변수로 받아 사용한다. */}
        { contextValue => 
          <button onClick={ e => contextValue.setStateFunc("react200") }>
            {/* 
              버튼을 클릭하면, 파라미터로 전달받은 R077_ContextApi 컴포넌트의 setStateFunc("react200")을 호출한다.
              R077_ContextApi 컴포넌트의 state 변수 name 값을 react200으로 할당한다.
             */}
            {contextValue.name}_button
            {/* 
              버튼을 누르기 전 contextValue.name 값이 없기 때문에 버튼명이 _button으로 표시된다. 
              버튼을 누르면 변경된 R077_ContextApi 컴포넌트의 state 변수 name 값인 react200을 가져오고 버튼명이
              react200_button으로 표시된다.
            */}
          </button>
        }
      </Consumer>
    )
  }
}

export default contextChildrenfor77;