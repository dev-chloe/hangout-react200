import { ADD } from '../actions';
// actions 폴더 index.js에서 ADD 변숫값을 가져온다.
import { combineReducers } from 'redux';

const initState = {
  str: 'react',
}
// 리듀서 데이터의 초깃값을 선언, 할당한다.

const data = ( state = initState, action ) => {
  // state 변수에 할당한 초깃값이 할당된다.
  switch ( action.type ) {
    // add 함수에서 반환된 type 변숫값 ADD를 가벼온다.
    case ADD:
      return state, {
        str: state.str + '200'
        // action.type 값이 ADD 값과 같은 경우, state 변수 str에 200을 붙인다.
        // 반환값은 data 변수에 할당한다.
      };
      default: 
      return state;
      // action.type 값이 ADD 값과 같지 않은 경우, state 변수 그대로 반환한다.
  }
};

const App = combineReducers({
  data
});
// 리듀서 함수 date를 combineReducers 함수를 이용해 하나의 리듀싱 함수로 변환하고 익스포트한다.
// 이 함수는 src의 index.js에 있는 createStore 함수의 파라미터로 넘겨 진다.
// 스토어 state 값에 변경이 발생했기 때문에 subscribe 함수가 동작해 화면이 렌더링 된다.
export default App;