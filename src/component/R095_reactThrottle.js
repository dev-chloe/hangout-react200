import { throttle } from "lodash";
import React, { Component } from "react";

class R095_reactThrottle extends Component {
  throttleFunc = throttle(() => {
    console.log("Throttle API Call")
    /*
      실제로 사용자가 텍스트 입력할때 검색어를 호출하는 코드가 위치할 곳이다.
      react라는 검색어를 0초(r), 0.3초(e), 0.5ch(a), 1.1초(c), 2초(t)에 입력했다면 
      throttle는 0초(r), 1초(rea), 2초(react) 1초 단위로 데이터 호출 코드를 실행한다.
    */
  }, 1000)
  /*
    throttle 함수에 1초의 실행 시간 간격을 할당하고
    throttleFunc 함수는 글자가 입력될 때 마다 호출되지만, throttle 함수는 1초마다 0개 또는 1개의 로그를 출력한다.
  */

  render () {
    return (
      <>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.throttleFunc} />
        {/* 
          input에 텍스트를 입력할 때마다 throttleFunc 함수를 호출한다.
        */}
      </>
    )
  }
}

export default R095_reactThrottle;

/*
  throttle도 debounce와 동일하게 시간 조건을 추가해 실행 횟수를 제한한다. 
  차이점은 debounce가 연속된 이벤트 중 마지막 이벤트가 발생한 시점부터 특정 시간이 지났을 때 동작한다면,
  throttle은 발생한 이벤트 수와 상관없이 지정한 시간 당위당 최대 한번만 동작한다는 것이다.
*/