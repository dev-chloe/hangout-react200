import { post } from "jquery";
import React, { Component } from "react";

class R060_FetchPost extends Component {
  componentDidMount = async () => {
    const response = await fetch('http://date.jsontest.com', {
      method: 'POST',
      // post 방식으로 통신하겠다는 뜻이다.
      headers: {
        'Content-Type': 'application/json',
      },
      // header 부분에서 어떤 형태의 데이터를 사용할지 지정한다.
      // Content-Type라는 변수를 사용하고
      // json 형태의 데이터를 사용하기 위해 application/json을 할당한다.
      body: {
        a: "react", 
        b: 200
      }
      // http body에 json 형태의 데이터를 담아 전송한다. 
    });
    console.log(response)
    const body = await response.json();
    console.log(body);
    alert(body.date)
  }
  render() {
    return (
      <h1>fetch post</h1>
    )
  }
}
// post도 get 방식과 마찬가지로 자바스크립트 내장 함수인 fetch를 사용하면 비동기 통신을 쉽게 구현가능하다.

// fetch 사용 방법은 get과 비슷하지만, 두번째 파라미터에 post 호출에 대한 정보가 추가 된다.
export default R060_FetchPost;