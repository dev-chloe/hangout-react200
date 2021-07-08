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


### [MYSQL 서버 구축하기 - AWS 가입하기](https://aws.amazon.com/ko/)
- react와 node 서버거 구동될 EC2라는 ubuntu 서버와 DB(mysql) 서버로 사용될 RDS 서버다.

### MYSQL 서버 구축하기 - RDS 인스턴스 생성하기
- 서비스 > 데이터베이스 > RDS > RDS Dashboard > 데이터베이스 생성
- MYSQL 선택 후 나머지는 설정하지 않는다
- 템플릿은 프리티어로 설정한다. 
- DB 인스턴스 식별자는 사용할 인스턴스의 명칭을 입력하고 마스터 암호는 DB 툴과 node 서버에서 사용된다.
- "스토리지 자동 조정화는 사용량에 따라 과금이되므로 체크 해제한다."
- 퍼블릭 엑세스 허용을 예로 체크하여 외부 DB툴에서도 접속할 수 있게한다. 
- 데이터베이스 포트가 3306인지 확인한다.
- 데이터베이스 생성 버튼을 누르면 RDS 인스턴스가 생성된다.
- 인스턴스 생성이 완료되면 인스턴스 상태가 사용가능이 표시된다 (좀 시간이 걸렸었음)

### MYSQL 서버 구축하기 - RDS 인스턴스 포트 설정하기
- 서비스 > 컴퓨팅 > EC2 > 보안그룹 > 보안그룹 ID (보안그룹 이름이 default인 보안 그룹 ID 선택
- 인바운드 포트를 추가하기 위해 인바운드 규칙 편집을 클릭한다.
- 규칙 추가를 눌러 MYSQL/Aurora인 3306 포트의 규칙을 입력하고 규칙 저장을 한다.

### [MYSQL 설치](https://dev.mysql.com/downloads/mysql/) (안깔아도 됬었음)
- DMG Archive 설치한다
- NO thanks, just start my download 버튼으로 설치 가능하다. 

### [MYSQL Workbench 설치](https://dev.mysql.com/downloads/workbench/)

```bash
brew install --cask mysqlWorkbench
```

### workebench로 rds 서버 접속하기
- aws > 서비스 > 데이터베이서> RDS > DB DLSTMXJSTM(1/40) > DB 식별자 > 엔드포인트 확인한다
- mysql connections 문구옆에 + 버튼 누르면 Setup New Connection 창 표시가 뜬다
- connection name을 정해 입력한다
- hostname에 rds 서버 엔드포인트 입력한다
- username은 rds 기본 설정인 admin으로 입력한다
- storein vault.. 버튼을 누르면 패스워드 입력할 수 있다. RDS 인스턴스 생성 시 작성한 마스터 버호 입력한다.


### MYSQL 스키마 생성 및 table 생성하기
- 스키마는 여러 개의 데이터베이스 생성해 독립적으로 사용할 수 있는다.
- workbench에 접속해서 왼쪽 nvaigator 영역 하단의 schemas 탭을 선택후 빈공간에 오른쪽 마우스 버튼을 눌러 create scheam를 클릭한다,
- schema 창에 name을 입력하고 apply를 누르면 스키마가 생성된다.
- use react; 
- CREATE TABEL 을 작성해 테이블을 생성한다.


### MYSQL 한국 시간 설정
- AWS 지역 설정에 따라 초기 시간 값이 한국이 아닐수 있는데 DB 서버의 시간은 데이터 insert나 update 할 때 기록하기 때문에 rds 서버 시간을 한국에 맞게 변경해야 한다.
- rds > 파라미터 그룹 생성 > 그룹이름 입력 > 생성 > 파라미터명을 클릭 > 수정페이지 > time_zone 검색해 Asia/Seoul을 선택 > 변경 사항 저장 
- rds 인스턴스에 추가한 파라미터 그룹을 등록하기 위해 수정 버튼 클릭 > DB 파라미터 그룹에 새로 추가한 파라미터 그룹 선택 > 계속 버튼 > 즉시 적용 > DB 인스턴스 수정
- rds 인스턴스 재부팅 > workbench 에서 now() 함수를 실행하면 한국 시간으로 조회된다. 

### MYSQL 한글 설정 및 Safe 모드 해제하기
- rds 서버에 한글 설정이 돼 있지 않으면 데이터를 삽입할 때 한글이 깨진다.
- 테이블 별로 charset을 utf8로 변경하면 한글 깨짐 현상을 해결할 수 있다.
- safe 모드가 설정되어 있으면 update 와 delete 쿼리를 사용할 수 없으므로 해제하여야 한다.

- workbench에서 SET SQL_SAFE_UPDATES = 0;로 설정하면 safe 모두가 해제되어 delete from react_swtool;가 실행 되는 것을 확인 할 수 있다.
- ALTER TABLE react.react_swtool convert to charset utf8;를 이용해 한글이 깨지지 않도록 설정한다.

### MYSQL 더미 데이터 삽입하기
- [INSERT INTO `react_swtool` VALUES ('USW20200101000000', '를 이름1', '상세 기능1', '20200101000000_라벨 이미지.png' ,'20200101000000_메인 이미지.png', '설명1', '데모 URL', '20200101000000_메뉴얼 파일.docx', 'Github URL1', '20200101000000', 'userA1', '20200102000000', 'userB1');] 
- 위와 같은 insert 문을 사용해 더미 데이터를 삽입한다. 
- 데이터와 column의 개수가 정확히 맞지 않으면 데이터가 들어가지 않는다.
- [select * from react_swtool;] 
- select 문으로 테이블을 조회할 수 있다.

### [fs(File System).readFileSync](https://c17an.github.io/node/Nodejs%EB%A1%9C-%ED%8C%8C%EC%9D%BC-%EB%8B%A4%EB%A3%A8%EA%B8%B0/)
- fs.readFileSync()는 동기적으로 파일을 읽는 것이다.
- 실행순서를 반드시 보장해야될 때 활용할 수 있다.


### [터미널로 GET, POST 요청하기(`curl`)](https://developyo.tistory.com/11)

```bash
curl -X POST http://localhost:5000/api/Swtool
```
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