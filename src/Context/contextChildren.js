import React from 'react';
import Children2 from './contextChildren2';

class contextChildren extends React.Component {
  render() {
    return (
      <Children2 />
      // contextChildren 컴포넌트에서는 부모 컴포넌트의 데이터를 사용하지 않고 손자 컴포넌트 contextChildren2를 return한다.
      // 손자 컴포넌트에서 사용할 데이터를 전달하지 않아도 된다.
    )
  }
}

export default contextChildren;