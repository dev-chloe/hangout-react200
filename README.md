# hangout-react200

### [화살표 함수](./src/component/R013_ArrowFunction.js#L34)
- [익명함수에서 콜백함수 내부 this란](./src/component/R013_ArrowFunction.js#L35-L36)
- [익명함수에서 콜백함수 내부에서 함수 밖의 this를 접근하기 위해서](./src/component/R013_ArrowFunction.js#L48-L51)
- [익명함수와 화살표 함수의 차이를 확인 할 수 있는 예제](./src/component/R013_ArrowFunction.js#L52-L55)

### [props 자료형 선언하기](./src/component/R018_PropsDatatype.js)
- [props 자료형 선언 proTypes](./src/component/R018_PropsDatatype.js#L23-L36)

### [참조값](./src/component/R028_PureComponentClass.js)
- [참조 값이란](./src/component/R028_PureComponentClass.js#L34-L36)

### [axios get 사용하기](./src/component/R061_AxiosGet.js)
- [axios get 사용방법](./src/component/R061_AxiosGet.js#L13-L16)

### [axios post 사용하기](./src/component/R062_AxiosPost.js)
- [axios get 사용방법](./src/component/R062_AxiosPost.js#L13-L16)

### [하이오더 컴포넌트 구현하기](./src/Hoc/R075_ReactHoc.js)
- [하이오더 컴포넌트](./src/Hoc/withHocComponent.js)

### [컨텍스트 api 사용하기](./src/Context/R076_ContextApi.js)
- [자식 컴포넌트](./src/Context/contextChildren.js)
- [손자 컴포넌트](./src/Context/contextChildren2.js)

### [react img 태그 사용하기 ](./src/component/LoginForm.js)
- [참조](https://gomgomkim.tistory.com/11)

### redux 기초
- redux react 비교 
  ![](./img/react-vs-redux.png)



  
---

## etc.

### 잘못된 이전 커밋 수정하기

```bash

  # 상태 확인하기
  git status 

  # staged 상태의 파일을 unstaged로 옮기기
  git restore --staged <file>...

  # unstaged 상태 확인하기
  git status 

  # 이전 커밋 고치기 
  git commit --amend
    # vi 열림
    # `i` insert 모드 변경
    # 커밋 메시지 수정
    # `esc` 키
    # :wq 입력

  # 변경 내용 확인하기
  git log
    # `q`로 탈출
```