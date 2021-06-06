import React from 'react';
import './App.css';
import ReactHoc from './Hoc/R075_ReactHoc';

function App() {
  return (
    <div className="cont_box">
      <h1>Start React 200!</h1>
      <p>HTML, CSS 적용하기</p>
      <ReactHoc name='React 200'/>
    </div>
  );
}

export default App;
