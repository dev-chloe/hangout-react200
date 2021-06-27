export const ADD = 'ADD';
export const add = () => {
  return {
      type: ADD
    }
  // StrAddButton 컴포넌트에서 add 함수를 실행하면 type 변수에 ADD 변숫값을 할당해 return한다.
};

// 컴포넌트에서 dispatch 함수가 실행되면, 리듀서 함수는 액션 값을 참조해서 작업을 실행한다.
// 이때 액션 값에 따라 조건을 분기할 수 있다.
