import React, { Component } from 'react';
import datatype  from 'prop-types';

class R018_PropsDatatype extends Component {
  render () {

    let { 
      String, Number, Boolean, Array, ObjectJson, Function
    } = this.props

    return (
      <div>
        <p>StringProps: {String}</p>
        <p>NumberProps: {Number}</p>
        <span>BooleanProps: {Boolean.toString()}</span>
        <p>ArrayProps: {Array.toString()}</p>
        <p>Object JsonProps: {JSON.stringify(ObjectJson)}</p>
        <p>FunctionProps: {Function}</p>
      </div>
    )
  }
}
R018_PropsDatatype.propTypes = {
  // props 값들의 적합한 자료형이 아니라 
  // Failed prop type: Invalid prop `String` of type `string` supplied to `R018_PropsDatatype`, expected `number`
  // 에러 발생
  // String: datatype.number,

  // 정상적으로 표시됨
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func
}

export default R018_PropsDatatype;