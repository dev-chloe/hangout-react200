import debounce from "lodash.debounce";
import React, { Component } from "react";

class R094_reactDebounce extends Component {
  debounceFunc = debounce(() => {
    console.log("Debounce API Call");
    /* 
      실제로 사용한 사용자가 입력한 텍스트가 포함된 검색어를 불러와야 할때 검색어 데이터를 호출하는 코드가 위치해야 한다.
      디바운스를 사용하지 않고 react라는 글자를 입력한다면 r, re, rea, reac, react가 입력되는 모든 시점에 데이터를 호출해야 한다.
      디바운스를 사용하면 react라는 글자가 모두 작성되고 지연시간 1초가 지난 후 데이터를 한 번만 호출한다.
    */
  }, 1000)
  // debounce 함수에 1초의 지연시간을 할당하고 
  // debounceFunc 함수는 글자가 입력될 때 마다 호출되지만 
  // debounce 함수는 마지막 호출이 끝나고 1초 후에 콘솔 로그를 출력한다.

  render () {
    return (
      <>
        <h2>검색어 입력</h2>
        <input type="text" onChange={this.debounceFunc} />
        {/* 
          input에 텍스트를 입력할 때마다 debounceFunc 함수를 호출한다.
        */}
      </>
    )
  }
}

export default R094_reactDebounce;

/*
  debounce는 연속된 이벤트 호출이 일어나는 상황에 사용한다.
  마지막 이벤트가 실행되고 일정한 시간 동안, 추가 이벤트가 발생하지 않을 때 실행되는 함수다.
  debounce는 꼭 필요한 시점에만 함수를 실행해 서버 자원을 효율적으로 사용할 수 있게 해준다.
*/