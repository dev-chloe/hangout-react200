import React from 'react';
import './App.css';
import PropsObjVal from './R020_PropsObjVal';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML, CSS 적용하기</p>
      <PropsObjVal ObjectJson = {{react: "리액트", twohundred: 200}}/>
      {/* 
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
      
      <PropsDatatype
        String = "react"
        Number = { 200 }
        Boolean = { 1==1 }
        Array = { [0, 1, 8]}
        ObjectJson = {{react: "리액트", twoHundred: '200'}}
        Function = {console.log("FunctionProps: function!")}
      /> */}
    </div>
  );
}

export default App;
