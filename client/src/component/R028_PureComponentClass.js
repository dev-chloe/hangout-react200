import React, { PureComponent } from 'react';

class R028_PureComponentClass extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      StateString: 'react',
      StateArrayObj: ['react', {react: '200'}]
    }
  }

  buttonClick = (type) => {
    if(type === 'String') {
      this.setState({StateString: 'react'})
    } else {
      this.setState({StateArrayObj: ['react', { react: '200'}]});
    }
  }

  render() {
    console.log('render() 실행')
    return (
      <div>
        <button onClick={ e => this.buttonClick('String')}>문자열 변경</button>
        <button onClick={ e => this.buttonClick('ArrayObject')}>객체 배열 변경</button>
        {/* 
         state 값이 동일하다고 간주해 render() 함수를 실행하지 않는다. 
         PureComponent에서는 새로운 state 변수가 선언되었지만, 변숫값만 비교한다.

         PureComponent에서는 기본적으로 변수 값만 비교하지만, 예외적으로 객체에 대해서는 참조값을 비교한다.
         객체 배열 변경 버튼에서 생성한 객체({ react: '200'}) 데이너는 같지만 참고값이 달라 다른 객체로 인식된다.
         그러므로 render() 함수를 실행된다,

         ** 참조값
          객체를 생 성했을 때 저장되는 메모리 주소.
          완전히 동일한 객체라도 새로 선안하면 다른 참조 값을 갖는다.
        */}
      </div>
    )
  }
}

export default R028_PureComponentClass;