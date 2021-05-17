import React, { Component } from 'react';

class R033_ReturnMap extends Component {
  render() {
    const sampleData = [
      'react', '200', 'Array Map'
    ]
    const element_Array = [
      <li key='1'>React</li>,
      <li key='2'>200</li>,
      <li key='3'>Array map</li>
    ]
    // li 태그 리스트를 element_Array 배열에 순서대로 저장한다.
    // Warning: Each child in a list should have a unique "key" prop. => key 값이 없을 때 발생하는 애러
    return (
      <ul>
        {element_Array.map((array_val) => array_val)}
        {sampleData.map((data, index) => <li key={index}>{data}</li>)}
        {/* map() 함수로 element_Array 배열에 있는 element 들을 순서대로 꺼내 ul 태그 안에 출력한다. */}
      </ul>
    )
  }
}

export default R033_ReturnMap;