import React, { Component } from 'react';

class R009_Es6 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var jsString1 = '자바스크립트'
    var jsString2 = '입니다'
    console.log('1. ' + jsString1 + ' 문자열' + jsString2 + '~')

    var Es6String1 = 'Es6'
    var Es6String2 = '입니다'
    console.log(`2. ${Es6String1} 문자열${Es6String2}!!
    ---- 다음 줄 입니다` );

    var LongString = "ES6에 추가된 String 함수들입니다.";
    console.log('3. startWith : ' + LongString.startsWith("ES6에 추가"));
    console.log('4. ensWith : ' + LongString.endsWith("함수들입니다."));
    console.log('5. includes : ' + LongString.includes("추가된 String"));
  }

  render() {
    return (
      <h2>[ THIS IS ES6 STRING]</h2>
    )
  }
}

export default R009_Es6;
/*
결과
  1. 자바스크립트 문자열입니다~
  2. Es6 문자열입니다!!
    ---- 다음 줄 입니다
  3. startWith : true
  4. ensWith : true
  5. includes : true

  startsWith(),  endsWith(), includes()는 ES6에 추가된 String 함수
  startsWith()는 변수 앞에서부터
  endsWith()는 뒤에서부터 일치하는 문자열이 있는지 찾는다
  includes() 위치에 상관없이 변수에 특정 문자열 포함돼 있는지 판단한다.
  함수 조건에 부합하면 true, 부합하지 않으면 false 반환한다
*/