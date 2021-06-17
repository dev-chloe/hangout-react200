import React, { useEffect, useState } from 'react';

function  R031_ReactHook(props) {
  const [contents, setContents] = useState('[THIS IS REACT]');
  
  useEffect(() => {
    console.log('useEffect');
  })

  return (
    <div>
      <h2>{contents}</h2>
      <button onClick={() => setContents('[THIS IS HOOK]')}>button</button>
    </div>
  )
}

// 함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state와 생명주기 함수와 같은 기능을 사용하기 위해 hook을 이용한다.
// hook 함수의 대표적인 것은 useState(), useEffext()가 있따.

// useState()로 state변수값을 선연 및 할당한다.
// contents는 state 변수명, setContents는 state 변수값을 변경해주는 함수이다.

// useEffect() 함수는 생명주기 함수 componentDidMount()와 같이 return 되는 html 코드 들이 화면에 그려진 이후에 실행된다.
// 최소 페이지가 로딩될때 한번 실행되고 setContents()함수로 state값이 변경되므녀 한 번 더 실행 된다.

// 버튼을 클릭하면 setContents()함수로 state값을 수정한다. 이 때 state 값이 변경되어 화면을 다시 그려주며 
// THIS IS REACT 에서 HIS IS HOOK 로 변경된다.

export default R031_ReactHook;