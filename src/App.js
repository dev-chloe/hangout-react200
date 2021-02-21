import React from 'react';
import './App.css';
import ImportConponent from './R003_ImportConponent'
// import LifecycleEx from './R004_LifecycleEx'
// import LifecycleEx from './R005_LifecycleEx'
import LifecycleEx from './R006_LifecycleEx'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML, CSS 적용하기</p>
      <ImportConponent></ImportConponent>
      <LifecycleEx
        prop_value='FromApp.js'
      ></LifecycleEx>
    </div>
  );
}

export default App;
