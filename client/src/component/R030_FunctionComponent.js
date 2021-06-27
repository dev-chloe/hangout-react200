import React from 'react';

function R030_FunctionComponent(props) {
  let { contents } = props;

  return (
    <h2>
      {contents}
    </h2>
  )
}
// 함수형 컴포넌트는 클래스 컴포넌트와 달리 state가 없고 생명주기 함수를 사용할 수 없다.
// props와 context를 파라미터로 전달 받고 render() 함수가 없으므로 return 만으로 화면을 나타낸다.
// props 앞에 this 가 붙지 않는다.

export default R030_FunctionComponent;