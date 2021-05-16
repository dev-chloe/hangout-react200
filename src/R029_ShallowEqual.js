import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal';

class R029_ShallowEqual extends Component {
  constructor (props) {
    super(props);
    this.state = {StateString: 'react'}
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState)
  }

  componentDidMount() {
    const object = { reaact: '200'};
    const Array1 = [ '리액트', object];
    const Array2 = [ '리액트', object];
    const Array3 = [ '리액트', { react : '200'}];

    console.log('shallowEqualArrays(Array1, Array2) : '
    + shallowEqualArrays(Array1, Array2));
    //shallowEqualArrays(Array1, Array2) : true
    // Array1, Array2를 비교한다. object 변수는 동일한 객체 ({ reaact: '200'})를 참조한다.
    // shallowEqualArrays() 함수는 두 배열을 비교하면 하면 true를 반환한다.

    console.log('shallowEqualArrays(Array2, Array3) : ' 
    + shallowEqualArrays(Array2, Array3));
    this.setState({StateString: 'react'})
    // shallowEqualArrays(Array2, Array3) : false
    // Array2, Array3를 비교한다.
    // Array2의 { reaact: '200'} 와 Array3의 { reaact: '200'} 는 다른 참조 값을 갖는 다른 객체 이므로 false를 반환한다.

    // Component 클래스에서도 shouldComponentUpdate(), shallowEqualArrays() 함수를 사용하면 
    // PureComponent 클래스처럼 값만 비교해 render() 함수를 실행시킬 수 있다.

    // 처음 페이지 로딩 때 render() 함수가 실행되고 
    // this.setState({StateString: 'react'}) 에서 state 값이 변경 되었을 때 실행되지 않는다.
  }

  render() {
    console.log('render() 실행')
    return (
      <></>
    )
  }
}

export default R029_ShallowEqual;