import React from 'react';
import './App.css';
import ImportConponent from './R003_ImportConponent'
// import LifecycleEx from './R004_LifecycleEx'
// import LifecycleEx from './R005_LifecycleEx'
// import LifecycleEx from './R006_LifecycleEx'
// import LifecycleEx from './R007_LifecycleEx'
import LifecycleEx from './R008_LifecycleEx'
import Es6 from './R009_Es6'
import Variable from './R010_Variable'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>HTML, CSS 적용하기</p>
      <ImportConponent></ImportConponent>
      <LifecycleEx
        prop_value='FromApp.js'
      ></LifecycleEx>
      <Es6 />
      <Variable />
    </div>
  );
}

export default App;
