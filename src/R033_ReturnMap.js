import React, { Component } from 'react';

class R033_ReturnMap extends Component {
  render() {
    const element_Array = [
      <li>React</li>
      , <li>200</li>
      , <li>Array map</li>
    ]
    // li 태그 리스트를 element_Array 배열에 순서대로 저장한다.
    return (
      <ul>
        {element_Array.map((array_val) => array_val)}
        {/* map() 함수로 element_Array 배열에 있는 element 들을 순서대로 꺼내 ul 태그 안에 출력한다. */}
      </ul>
    )
  }
}

export default R033_ReturnMap;