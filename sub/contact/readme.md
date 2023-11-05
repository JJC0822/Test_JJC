## sub_contact

### 231028

- html/css - 마크업 작업
- 미디어쿼리 PC 작업 완성
- 문의/신청 페이지 미완성

### 231030

- js- kakao_map이 pages에서 나오지 않는 오류 해결
  => 이유: html 내에 <script scr="">에 https 누락
- html - 문의/신청 페이지 마크업 작업

### 231031

- css - '프로젝트 문의하기' 부분 style 작업

### 231101

- css - '브로슈어 신청하기' 부분 style 작업
- css - 문의/신청 페이지에 공통으로 들어가는 개인정보동의 checkbox 커스텀 작업
- 문의/신청 페이지 미디어쿼리 PC 작업 1차

### 231102

- 미디어쿼리 PC 작업 2차
- js - header 메인 메뉴에 gsapPlugin_ScrollTrigger 적용해서 스크롤을 움직일 때 사라졌다가 다시 나타나는 효과 줌
- js - gsapPlugin_ScrollSmoder를 적용해서 스크롤을 움직일 때 각각의 콘텐츠들이 움직이는 효과를 주려고 했으나 실패

### 231103

- js - gsapPlugin_ScrollSmoder 적용 실패 해결
  => 이유: 애니메이션을 적용시킬 선택자명이 틀려서
- js 1차 - .addEventListener로 '프로젝트 문의하기'를 누르면 문의할 수 있는 toggle창을 구현했지만 닫았을 때 일부가 보이면서 실패
  => 이유: overflow 속성를 이용해야하는 방법이었지만 그 부분에 margin이 아닌 padding을 사용했기 때문
- css - '프로젝트 문의하기'부분의 toggle 완벽한 구현을 위해 기존 마크업 작업을 일부 수정
  => form 전체에 주었던 padding을 각각의 부분에 margin으로 수정
- js 2차 - css를 수정함으로써 toggle창 완성
- js - .addEventListener로 '브로슈어 신청하기'를 누르면 모달창을 띄우려 했지만 모달창이 눌렀을 때 나오는 것이 아니라 페이지를 들어갔는 때부터 이미 떠있는 형식으로 구현

### 231104

- js - '브로슈어 신청하기'를 누르면 모달창 띄우기 실패 해결
  => 이유: '복합 선택자'에 display: none;을 주고 .add와 .remove로 열고 닫으려니까 상황에 맞지 않는 형식으로 구현돼서 '복합 선택자'가 아닌 '기존 선택자'에 display: none;을 주고 js에서 .style.diplay로 여는 버튼에 block, 닫는 버튼에 none 속성을 주어서 해결
- js - '프로젝트 문의하기' toggle창 내에 프로젝트 유형을 누르면 선택된 유형의 테두리와 글자 색상이 바뀌도록 함
- css - 페이지 메인 제목 뒤에 gsapPlugin 중에 MotionPath를 적용 시킬 svg 이미지 넣고 위치와 크기를 조절하려는데 콘덴츠가 자꾸 사라졌지만 결국 해결
  => 이유: 부모요소에 있던 overflow 때문 그래서 margin 대신 padding으로 여백 조절
- js - map 좌표 이미지 변경을 시도 했지만 실패

### 231104

- html - 헤더 사이드 메뉴에 side_nav 페이지 연결
- css - 일부 수정
- js - map 좌표 이미지 변경을 시도 했지만 실패 해결
  => 이유: 좌표 이미지를 변경하려고 넣었던 이미지 url 주소가 틀렸기 때문
