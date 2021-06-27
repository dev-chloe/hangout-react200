import React, { Component } from 'react';

class R010_Variable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // var varName = 'react';
    // console.log('varName1 : ' + varName);
    // var varName = '200'; // 'varName' is already defined  no-redeclare
    // console.log('varName2 : ' + varName);

    let letName = 'react';
    console.log('letName1 : ' + letName);
    // let letName = '200'; // Parsing error: Identifier 'letName' has already been declared
    letName = 'react200';
    console.log('letName2 : ' + letName);

    const constName = 'react';
    console.log('constName : ' + constName);
    // const constName = 200; //Parsing error: Identifier 'constName' has already been declared
    // constName = 'react200'; // Uncaught TypeError: Assignment to constant variable.
  }

  render() {
    return (
      <h2>THIS IS Variable</h2>
    )
  }
}

export default R010_Variable;

/*
  var 재선언, 재할당 허용하기 때문에 경고 메세지가 출력되어도 페이지는 정상 표시된다
  let 재선언을 허용하지 않아 에러 페이지가 표시된다
      재할당은 허용하기 때문에 새로운 값을 할당 하였을 때 페이지 정상 표시된다
  const 재선언, 재할당을 허용하지 않아 에러 페이지가 표시된다
*/