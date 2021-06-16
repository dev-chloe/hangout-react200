import React, { Component } from "react";
import cookie from 'react-cookies';

class R087_cookieRemove extends Component {
  componentDidMount() {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid', "react200", {
      path: '/',
      expires,
      // secure: true,
      // httpOnly: true
    });
    // 쿠키 저장 코드가 실행된다.
    setTimeout(function() {
      cookie.remove('userid', {path: '/'});
    }, 1000);
    // 1초 후 cookie.remove 함수를 사용해 루트(/) 경로에 저장된 userid라는 쿠키 값을 삭제한다.
    setTimeout(() => {
      alert(cookie.load('userid'))
    }, 2000);
    // cookie.remove 함수가 실행되고 약 1초 후 웹 브라우저에 저장된 쿠키 값을 alert로 확인하면 
    // 실행 결과가 undefined로 쿠키가 삭제된 것을 확인할 수 있다.
  }
  render() {
    return (
      <>
        <h3>react-cookies Remove</h3>
      </>
    )
  }
}

export default R087_cookieRemove;

// remove 함수는 웹 브라우저에 남아 있는 쿠키에 key로 접근해 쿠키를 삭제하는 함수다.

/*
  예제에서 흐름상 cookie.save가 완료된 후 cookie.remove가 완료 되고 cookie.load가 실행이 되는데
  자바스크립트는 비동기적으로 동작하기 때문에 순서를 보장할 수 없으므로
  setTimeout 함수를 사용하여 대략적인 완료 시간을 확보 할수 있다.ㄴ
*/