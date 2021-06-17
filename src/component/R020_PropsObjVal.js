import React, { Component } from "react";
import datatype from "prop-types";

class R020_PropsObjVal extends Component {
  render() {
    let {
      ObjectJson
    } = this.props
    return (
      <div>
        {JSON.stringify(ObjectJson)}
      </div>
    )
  }
}

R020_PropsObjVal.propTypes = {
  // object(객체 형태)의 자료형을 선언할 때는 shape라는 유형을 사용한다.
  ObjectJson: datatype.shape({
    react: datatype.string,
    twohundred: datatype.number
    // PropsObjVal ObjectJson = {{react: "리액트", twohundred: "200"}}/> 일 때
    // twothundred가 문자열 "200"으로 전달되었지만, 자료형이 number로 선언되어 있으므로 
    // Failed prop type: Invalid prop `ObjectJson.twohundred` of type `string` supplied to `R020_PropsObjVal`, expected `number`
    // 경고메세지가 뜬다
    // PropsObjVal ObjectJson = {{react: "리액트", twohundred: 200}}/>
    // 정상적으로 number 로 전달 되었기 때문에 경고 메시지 없다.
  })
}

export default R020_PropsObjVal;