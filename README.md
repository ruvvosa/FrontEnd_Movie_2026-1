# Movie Beginner

인기 영화 목록을 보여주는 웹 프로젝트입니다.

## 시작하기

### 1. 패키지 설치

프로젝트에 필요한 패키지를 설치합니다.

```bash
npm install
```

### 2. 환경 변수 설정

API 키 등 민감한 정보는 `.env` 파일에서 관리합니다.  
`.env` 파일은 보안상 깃에 올라가지 않기 때문에 직접 만들어야 합니다.

프로젝트 루트에 `.env` 파일을 생성하고 아래 내용을 입력하세요.

```
VITE_TMDB_ACCESS_TOKEN=여기에_발급받은_토큰_입력
```

> TMDB Access Token은 [https://www.themoviedb.org](https://www.themoviedb.org) 에서 회원가입 후  
> 설정 → API 메뉴에서 발급받을 수 있습니다.

### 3. 개발 서버 실행

```bash
npm run dev
```

실행 후 브라우저에서 **http://localhost:5173** 으로 접속하세요.

> ⚠️ `index.html`을 브라우저에서 직접 열면 동작하지 않습니다.  
> 반드시 `npm run dev`로 서버를 실행한 뒤 접속해야 합니다.

## 프로젝트 구조

```
├── assets/          # 이미지 등 정적 파일
├── style/
│   ├── index.css    # 전체 스타일 진입점
│   ├── header.css   # 헤더 스타일
│   └── main.css     # 메인 콘텐츠 스타일
├── index.html
├── index.js         # 진입점
├── .env             # 환경 변수 (git 제외)
└── .env.example     # 환경 변수 템플릿
```
