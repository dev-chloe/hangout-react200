import React, { Component } from 'react';

class R014_ForEach extends Component {

  componentDidMount() {
    var For_Arr = [ 3, 2, 8, 8 ];
    var For_newArr = [];

    for ( var i = 0; i < For_Arr.length; i++ ) {
      For_newArr.push(For_Arr[i]);
    }
    // 1. For_newArr : [3,2,8,8]
    console.log("1. For_newArr : [" + For_Arr + "]");

    var ForEach_Arr = [ 3, 3, 9, 8 ];
    var ForEach_newArr = [];
    ForEach_Arr.forEach((result) => {
      ForEach_newArr.push(result);
    })
    // 2. ForEach_newArr : [3,3,9,8]
    console.log("2. ForEach_newArr : [" + ForEach_newArr + "]");
  }

  render() {
    return (
      <h2>[THIS IS ForEach]</h2>
    )
  }
}

export default R014_ForEach;