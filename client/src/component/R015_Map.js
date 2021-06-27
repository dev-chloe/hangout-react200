import React, { Component } from 'react';

class R015_Map extends Component {

  componentDidMount() {
    var Map_Arr = [ 3, 2, 8, 8 ];
    let Map_newArr = Map_Arr.map( x => x )
    //1. Map_newArr : [3,2,8,8]
    console.log(`1. Map_newArr : [${Map_newArr}]`)

    let Map_mulitiArr = Map_Arr.map( x => x * 2)
    // 2. Map_mulitiArr : [6,4,16,16]
    console.log(`2. Map_mulitiArr : [${Map_mulitiArr}]`)

    var ObjArray = [{key: 'react', value: '200'},
                    {key: '리액트', value: 'TwoHundred'}];
    let Map_objArr = ObjArray.map((obj, index) => {
      // 3. obj:  {"key":"react","value":"200"}
      // 4. obj:  {"key":"리액트","value":"TwoHundred"}
      console.log(`${index + 3}. obj:  ${JSON.stringify(obj)}`)
      var Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });
    // 5. Map_objArr : [{"react":"200"},{"리액트":"TwoHundred"}]
    console.log(`5. Map_objArr : ${JSON.stringify(Map_objArr)}`);
  }
  render() {
    return (
      <h2>[THIS IS Map]</h2>
    )
  }
}
export default R015_Map;