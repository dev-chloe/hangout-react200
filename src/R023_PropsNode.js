import React, { Component } from 'react';

class R023_PropsNode extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

// 하위 컴포넌트사이에 다른 태그를 추가하면 props에 담아 하위 컴포넌트에 전달한다
// 상위 컴포넌트에서 전달된 노드는 this.props.children 이라는 문법으로 접근해 사용할 수 있다.

export default R023_PropsNode;