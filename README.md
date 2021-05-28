# hangout-react200

### [화살표 함수](./src/R013_ArrowFunction.js#L34)
- [익명함수에서 콜백함수 내부 this란](./src/R013_ArrowFunction.js#L35-L36)
- [익명함수에서 콜백함수 내부에서 함수 밖의 this를 접근하기 위해서](./src/R013_ArrowFunction.js#L48-L51)
- [익명함수와 화살표 함수의 차이를 확인 할 수 있는 예제](./src/R013_ArrowFunction.js#L52-L55)

### [props 자료형 선언하기](./src/R018_PropsDatatype.js)
- [props 자료형 선언 proTypes](./src/R018_PropsDatatype.js#L23-L36)

### [참조값](./src/R028_PureComponentClass.js)
- [참조 값이란](./src/R028_PureComponentClass.js#L34-L36)

### [axios get 사용하기](./src/R061_AxiosGet.js)
- [axios get 사용방법](./src/R061_AxiosGet.js#L13-L16)

### [axios post 사용하기](./src/R062_AxiosPost.js)
- [axios get 사용방법](./src/R062_AxiosPost.js#L13-L16)

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