import React, { Component } from "react";

class R059_FetchGet extends Component {
  componentDidMount = async () => {
    const responese = await fetch('http://date.jsontest.com');
    // responese json 형태
    // json() 함수로 변환해 body라는 변수에 할당한다.
    // 이때 fetch 함수의 비동기적 특징 때문에 데이터를 가지고 오기전에 다음이 실행되어 에러가 발생할 수 있다.
    console.log(responese);
    const body = await responese.json();
    // 이런 에러에는 비동기 함수에 동기적인 기능을 추가해 해결할 수 있고 
    // 이때 사용하는것이 async와 await 문법이다.
    // 비동기 함수를 실행하는 함수에 async를 추가하고 동기적으로 처리 돼야 하는 함수 구문앞에 await를 추가한다.
    console.log(body);
    alert(body.date)
  }

  render() {
    return (
      <h1>fetch get</h1>
    )
  }
}

// 비동기 통신
// 먼저 시작한 작업의 여부와 상관없이 다음 작업을 실행하는 것

// fetch를 사용해 get 방식으로 url을 호출해 데이터를 가져온다.
// 가져온 데이터를 response라는 변수에 할당한다.
// 이 때 fetch함수에 별도의 http 메서드 설정이 없으면 get 방식으로 호출한다.
// 웹브라우저에서 테서트 url 호출하면 데이터 확인가능하다

export default R059_FetchGet;