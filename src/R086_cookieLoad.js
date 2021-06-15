import { Component } from "react";
import cookie from 'react-cookies';

class R086_cookieLoad extends Component {
  componentDidMount() {
    const expires = new Date()
    expires.setMinutes(expires.getMinutes() + 60)
    cookie.save('userid', "react200"
    , {
      path: '/',
      expires,
      // secure: true,
      // httpOnly: true
    });
    setTimeout(function() {
      alert(cookie.load('userid'))
      // cookie.load(key) 형태로 웹 브라우저에 저장된 쿠키 중 userid라는 key를 가진 쿠키의 value를 가져온다.
      // 저장된 쿠키를 1초 후에 가져와 값을 alert 함수로 표시한다.
    },1000);
    // setTimeout 함수를 사용해 1초 후에 alert를 띄우도록한다. 쿠키가 저장되기까지 충분한 시간을 두기 위함이다.
  }
  render() {
    return (
      <>
        <h3>react-cookies Load</h3>
      </>
    )
  }
}
export default R086_cookieLoad;

/* 
  save 함수가 쿠키를 (key, value) 쌍으로 저장하는 함수였다면, load 함수는 웹 브라우저에 남아 있는 쿠키에 key로 접근해 value을 가져오는 함수다.
*/