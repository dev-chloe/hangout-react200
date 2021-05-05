import React, { Component } from 'react';

class R011_SpreadOperator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //javascript Array
    var varArray1 = ['num1','num1'];
    var varArray2 = ['num3','num4'];
    var sumVarArr1 = [varArray1[0],varArray1[1],varArray2[0],varArray2[1]];
    // sumVarArr: num1,num1,num3,num4
    console.log('1. sumVarArr : ' + sumVarArr1);
    var sumVarArr2 = [].concat(varArray1, varArray2);
    // sumVarArr: num1,num1,num3,num4
    console.log('2. sumVarArr : ' + sumVarArr2);

    //ES6 Array
    let sumLetArr = [...varArray1, ...varArray2];
    //u mLetArr : num1,num1,num3,num4
    console.log('3. sumLetArr : ' + sumLetArr);
    
    const [sum1, sum2, ...remain] = sumLetArr;
    // sum1: num1, sum2: num1, remail: num3,num4
    console.log('4. sum1: ' + sum1 + ', sum2: ' + sum2 + ', remail: ' + remain);


    var varObj1 = { key1 : 'val1', key2 : 'val2' }
    var varObj2 = { key2 : 'new2', key3 : 'val3' }

    //javascript Object
    var sumVarObj = Object.assign({}, varObj1, varObj2);
    // sumVarObj : {"key1":"val1","key2":"new2","key3":"val3"}
    console.log('5. sumVarObj : ' + JSON.stringify(sumVarObj));
    //ES6 Object
    var sumLetObj =  {...varObj1, ...varObj2};
    // sumLetObj : {"key1":"val1","key2":"new2","key3":"val3"}
    console.log('6. sumLetObj : ' + JSON.stringify(sumLetObj));

    var {key1, key3, ...others} = sumLetObj;
    // key1 : val1, key3 : val3, others : {"key2":"new2"}
    console.log('7. key1 : ' + key1 + ', key3 : ' + key3 + ', others : ' + JSON.stringify(others));
  }
  render() {
    return (
      <h2>[THIS IS SpreadOperator]</h2>
    )
  }
}

export default R011_SpreadOperator;