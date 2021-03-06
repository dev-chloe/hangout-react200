import React from 'react';
import Children from './contextChildrenfor77';

const { Provider, Consumer } = React.createContext();
export { Consumer }

class R077_ContextApi extends React.Component {
  constructor (props) {
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this);
  }
  // props는 데이터가 부모에서 자식 컴포넌트로 단방향으로만 이동할 수 있다.
  // 컨텤스트를 사용하면 자식 컴포넌트에서 부모 컴포넌트의 데이터를 변경할 수 있다. 

  setStateFunc(value) {
    this.setState({ name : value });
  }
  // state 변수 name에 파라미터 value를 할당하는 함수를 선언한다.
  
  render () {
    const content = {
      ...this.state,
      setStateFunc : this.setStateFunc
    }
    // content 변수에 R077_ContextApi 컴포넌트의 state와 ssetStateFunc 함수를 할당한다.
  
    return (
      <Provider value={ content }>
        <Children />
      </Provider>
      // 자식 컴포넌트를 <Provider> 태그로 감싸고 전달할 데이터인 content를 value 값으로 할당한다.
    )
  }
}

export default R077_ContextApi;