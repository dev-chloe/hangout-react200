import React, { Component } from 'react';
import cookie from 'react-cookies';

class R085_cookieSave extends Component {
  componentDidMount() {
    const expires = new Date()
    // 현재 날짜와 시간을 불러와 expires 변수에 할당한다.
    expires.setMinutes(expires.getMinutes() + 60)
    // getMinutes 함수를 사용해 expires 변수를 분으로 환산하고 60분을 더한 값을 setMinutes 함수로 다시 할당한다.
    cookie.save('userid', "react200", {
      /* 
        react-cookies 패키지 save 함수는 세 가지 파라미터를 받는다. 첫번째 쿠키의 키(userid), 
       두 번째는 쿠키 값(react200), 세 번째는 쿠키 옵션이다.
      */
      path: '/',
      /* path는 쿠키 값을 저장하는 서버 경로다.
       path가 /react라면 localhost:3000/에서는 저장된 쿠키를 확인할 수 없고
       localhost:3000/react에서만 확인할 수 있다. path가 /라면 모든 페이지에서 쿠키를 접근할 수 있다.
      */
      expires,
      // 옵션의 두번째 인자는 쿠키의 유효시간이다. 60분을 더했기 때문에 쿠키가 저장된 이후 1시간 동안 웹 브라우저에 쿠키가 남게 된다.
      // secure: true, 
      /* 
        secure가 true이면 웹 브라우저와 웹 서버가 https로 통신하는 경우에만 쿠키가 저장된다.
      */
      // httpOnly: true
      /* 
        httpOnly 옵션은 document.cookie라는 자바스크립트 코드로 쿠키에 비정상적으로 접속하는 것을 막는 옵션이다.
        
      */
    })
  }
  render () {
    return (
      <>
        <h3>react-cookies Save</h3>
      </>
    )
  }
}

export default R085_cookieSave;

// 쿠키란, 사용자가 접속한 웹 사이트의 서버를 통해 사용자 컴퓨터에 설치되는 정보를 말한다.
// 보통 크롬과 같은 웹 브라우저에 쿠키가 저장된다. 쿠키는 사용자 정보를 저장하거나 마케팅을 위한 목적으로 사용될 수 있다.