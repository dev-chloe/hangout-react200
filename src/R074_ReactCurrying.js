import React, { Component } from "react";

class R074_ReactCurrying extends Component {
  pluseNumOrString(c, d) {
    return c + d;
  }
  // 파라미터로 전달된 c,d를 더해주는 함수를 생성한다. + 연산자는 숫자와 문자열에 사용할 수 있다.

  PlusFunc1(a) {
    return function(b) {
      return this.pluseNumOrString(a, b)
    }.bind(this)
  }
  // PlusFunc1 함수는 this.plusNumOrString(a,b)를 return하는 또 다른 함수를 return 한다.

  PlusFunc2 = a => b => this.pluseNumOrString(a,b)
  // PlusFunc2 함수는 PlusFunc1 함수를 화살표 함수로 간단하게 표현한 것이다. 완전히 동일한 함수다.

  PlusFunc(a){
    return this.PlusFunc1(a)(200)
  }
  // PlusFunc 함수를 파라미터를 1개(a)만 받는다. PlusFunc1 함수를 호출할 때 변수 a와 상수 200을 파라미터와 함께 전달한다.


  render() {
    return (
      <>
        <input type="button" value="NumberPlus" onClick={e => alert(this.PlusFunc(100))}/>
        <input type="button" value="StringPlus" onClick={e => alert(this.PlusFunc("react"))} />
        {/* 
          PlusFunc 함수를 호출하면서 숫자 100과 문자열 react를 전달한다.
          고정으로 더해주는 숫자 200은 파라미터로 넣어주기 때문에 PlusFunc 함수를 호출할 때 각각 200을 전달하지 않아도 된다.

          NumberPlus 버튼을 클릭했을 때 100 + 200의 결과인 300, 
          StringPlus 버튼을 클릭했을 때 react + 200의 결과인 react200이 팝업 창에 표시된다.
        */}
      </>
    )
  }
}

export default R074_ReactCurrying;