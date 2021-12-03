## 리액트 과제

### 과제 소개

- 소개 : 트립비토즈 웹 서비스 호텔 상세 페이지 클론코딩
- 일시 : 2021.11.29(월) ~ 2021.12.03(금)

### 실행 방법

- yarn install (패키지 설치)
- yarn mockserver (목 서버 실행)
- yarn start

### 기술 스택

- react
- redux
- redux-saga

### 구현 기능 및 컴포넌트

- 이미지 캐러셀 컴포넌트
- 호텔 정보 컴포넌트
- 객실 정보 컴포넌트
- 편의 시설 컴포넌트
- 리뷰 컴포넌트
- 편의 시설 및 리뷰 더 보기 클릭 토글
- 데이터 로드 전 로딩 인디케이터

### 필요 작업 혹은 고민

- 네트워크 오류 대응
- 데이터가 없는 경우 고려하여 구현
- 렌더링 최적화(이미지 크기, lazy load)
- 타입스크립트 적용

- 시맨틱 마크업(article, section, div, p 등 목적에 맞게 사용)
- 이미지 캐러셀 30 -> 1, 1 -> 30 으로 갈때 버튼 빠르게 누르면 부작용
- map 키 값들 적절한것으로 교체
- 객실 정보 최저가, 조식포함등 태그

- 폴더 구조 어떻게 해야하는지
- 뎁스 줄이기(div등 span으로 바꾸어 줄이기? 더 생각해볼것)
- 변수 이름 더 명확하게
- styled-components 안의 내용 더 줄일 수 있는 방법

<br>
<br>
<hr>
<br>
<br>

## 과제 요구사항

<br>

### 과제 설명

- https://www.figma.com/file/ZeJPLp7ZQjnTnlw7v0lJSJ/TBZ-Web?node-id=393%3A12637의 시안과 https://www.tripbtoz.com/, 아래 의 사진을 참고하여 호텔 상세페이지를 구현하세요.
- PC 버전만 구현합니다. 반응형은 고려하지 않으셔도 됩니다.
- 구현하지 않아도 되는 컴포넌트는 다음과 같습니다.
  - 우측 호텔 이벤트
  - 우측 여행자 평가
  - 슬라이더 상단 네이버 이벤트 배너 하단 호텔 정보 컴포넌트
- 구현해야 하는 컴포넌트는 다음과 같습니다.
  - 우측 호텔 정보 컴포넌트
  - 사진 슬라이더 컴포넌트
  - 객실 정보 컴포넌트
  - 편의시설 및 서비스 컴포넌트 리뷰 컴포넌트

<br>

### 기본 요구사항

- 다음의 기술과 라이브러리를 사용하여 구현하세요.
  - react, redux, redux-saga (필수)
  - styled-components (필수)
  - Fetch API (필수)
  - json-server (mock server)
  - typescript (선택)
- CRA를 사용해도 됩니다. 빌드는 고려하지 않고 local에서 구현하세요.
- 제공하는 json 예시를 기반으로 mock server를 구현하여 데이터를 받아옵니다.
- mock server는 꼭 json-server를 쓰지 않아도 됩니다.
- 호텔 슬라이더 사진, 객실 사진은 https://picsum.photos/을 분석하여 가져오세요.
- 다른 dummy image service url을 사용해도 좋습니다.
- 사진 슬라이더 컴포넌트는 아래와 같이 구현하세요.
  - 화면 상단 이미지 슬라이더는 라이브러리를 쓰지 않고 직접 구현하세요.
  - 슬라이더의 버튼은 직접 css로 구현하세요.
  - 호텔 슬라이더 사진은 최소 30장 이상 가져오세요.
  - 좌측, 우측 버튼을 누르면 사진이 변경되도록 하세요.
  - 사진을 누르면 갤러리로 이동하지 않아도 됩니다.
  - 사진의 끝에 도달 후 우측 버튼을 누르면 첫 번째 사진이 나오도록 합니다.
  - 사진 교체 시 애니메이션은 적용하지 않아도 됩니다.
- 우측 호텔 정보 컴포넌트는 아래와 같이 구현하세요.
  - 시안에 있는 모든 정보가 노출되어야 합니다.
  - 트립어드바이저 로고는 추가하지 않아도 됩니다.
  - 별점에 해당하는 초록색 원형은 css로 구현해주세요.
  - 태그가 많은 경우 자연스럽게 줄 바꿈이 되도록 합니다.
- 객실 정보 컴포넌트는 아래와 같이 구현하세요.
  - 객실 사진은 무작위 이미지를 가져오세요.
  - 객실 사진은 한 장만 가져오세요. 객실 사진 우측 하단의 추가 사진 배지는 구현하지 않아도 됩니다.
  - 객실 이름과 면적을 구현합니다.
  - 예약 부분에서 다른 배지는 구현하지 않고 ‘환불 불가’와 ‘무료 취소’ 두 가지만 구현합니다. (피그마 시안 참고)
  - 예약 부분에서 1박 가격, 세금 봉사료 포함 가격, 예약 버튼을 구현합니다.
- 편의시설 및 서비스 컴포넌트는 아래와 같이 구현하세요.
  - 편의시설에 해당하는 아이콘을 넣어주세요. (https://www.figma.com/file/uHrcEYxgniOWbq5GxKrKU0/Tripbtoz-Design- System?node-id=496%3A0)
  - 편의시설은 6개까지 보이고 초과 시 더 보기 버튼을 노출하여 나머지를 볼 수 있도록 합니다.
- 리뷰 컴포넌트는 아래와 같이 구현하세요.
  - 리뷰 별점에 해당하는 초록색 원형은 css로 구현해주세요.
  - 리뷰 내용이 긴 경우 말줄임 표시 후 더 보기 버튼을 노출합니다.
  - 더 보기 버튼 클릭 시 생략된 리뷰가 표현됩니다.
  - 리뷰는 최대 2개만 노출합니다.
  - 트립어드바이저 로고는 추가하지 않아도 됩니다.
  - 지역은 표시하지 않아도 됩니다.
- 슬라이더 버튼과 편의시설 및 서비스의 더 보기 버튼, 리뷰 더 보기 버튼 이외의 상호작용은 동작하지 않아도 됩니다.
- 필요한 아이콘은 피그마에서 다운받아 사용하세요.
- 모든 숫자는 세 자리 마다 콤마를 표시합니다.

<br>

### 추가 요구사항

- 렌더링 최적화를 고려해보세요. (이미지 크기, lazy load 등)
- 모든 데이터가 로드되기 전까지 화면 전체에 로딩 인디케이터를 표현하도록 하세요.
  - 로딩 인디케이터는 https://loading.io/css/에서 마음에 드는 것을 선택합니다.
  - 전체 화면을 하얗게 보여주고 가운데에 로딩 인디케이터를 표시합니다.
- 데이터가 없는 경우를 고려하여 구현하세요.
- 네트워크 오류에 대응하세요.

<br>

### API

| path     | type | 설명           |
| -------- | ---- | -------------- |
| /hotel   | GET  | 호텔 정보 반환 |
| /reviews | GET  | 리뷰 정보 반환 |
| /rooms   | GET  | 객실 정보 반환 |

/hotel 예시

```
{
  "id": 2856414,
  "name": " ",
  "address": "",
  "ratings": 5,
  "tags": [...],
  "amenities": [...]
}
```

/reviews 예시

```
{
  "info": {
    "total_review_count": 9999,
    "rating": 5
  },
  "data": [{
    "published_date": "YYYY-MM-DD",
    "rating": 4,
    "travel_date": "YYYY-MM-DD",
    "content": " ",
    "username": " ",
    "title": " "
  }]
}
```

/rooms 요청의 반환 값은 자유롭게 정의하여 사용하세요.
