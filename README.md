# React 영화 목록 렌더링 실습

이번 실습의 목표는 지난 실습에서 만들었던 Vanilla JavaScript 영화 목록 화면을 React 방식으로 옮겨보는 것입니다.

검색 기능과 더보기 버튼은 이번 범위에서 제외합니다. 이번에는 영화 목록 데이터를 카드 형태로 렌더링하는 것까지만 진행합니다.

## 최종 목표

```txt
샘플 영화 데이터로 먼저 화면 확인
MovieList에서 배열 반복 렌더링
MovieCard에서 제목, 평점, 포스터 출력
마지막에 샘플 데이터를 API 데이터로 교체
```

처음부터 API까지 한 번에 연결하지 않습니다. 먼저 눈에 보이는 샘플 데이터로 React 렌더링 방식을 익히고, 마지막 단계에서 실제 API 데이터를 연결합니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 Vite가 안내하는 주소를 열면 됩니다. 보통 아래 주소입니다.

```txt
http://localhost:5173
```

API 연결 단계까지 진행하려면 프로젝트 루트에 `.env` 파일이 필요합니다.

```txt
VITE_TMDB_ACCESS_TOKEN=발급받은_TMDB_ACCESS_TOKEN
```

## 기존에 포크한 경우

이미 이전 상태에서 포크한 사람은 본인 포크 저장소를 최신 상태로 맞춘 뒤 진행해야 합니다.

GitHub에서 아래 순서대로 진행하세요.

```txt
본인 포크 저장소 접속
Sync fork 클릭
Update branch 클릭
```

그다음 로컬에 이미 clone 해둔 폴더가 있다면 해당 폴더에서 최신 내용을 받아옵니다.

```bash
git pull origin main
```

아직 clone하지 않았다면, `Sync fork`를 먼저 한 뒤 본인 포크 저장소를 clone합니다.

```bash
git clone 본인_포크_주소
cd FrontEnd_Movie_2026-1
npm install
npm run dev
```

이미 로컬에서 작업을 시작했다면, 작업 내용을 먼저 커밋한 뒤 최신 내용을 받아오세요.

```bash
git add .
git commit -m "작업 내용 저장"
git pull --rebase origin main
```

아직 작업한 내용이 없고 동기화가 잘 안 된다면 기존 폴더를 지우고 다시 clone해도 됩니다. 단, 이 방법은 기존 로컬 작업 내용이 사라지므로 작업한 내용이 없는 경우에만 사용하세요.

## HTML, JS와 다른 점

기존 HTML, JavaScript 방식에서는 브라우저 DOM을 직접 찾아서 수정했습니다.

```js
const title = document.querySelector('.title')
title.textContent = 'Hello'
```

React에서는 DOM을 직접 찾기보다, 화면이 어떤 모습이어야 하는지를 JSX로 작성합니다.

```tsx
function Greeting() {
  const message = 'Hello'

  return <h1>{message}</h1>
}
```

중요한 차이는 아래와 같습니다.

```txt
HTML의 class
React의 className

문자열로 HTML 만들기
JSX로 UI 작성하기

document.querySelector로 DOM 찾기
props와 state로 데이터 전달하기

appendChild로 요소 추가하기
배열 map으로 반복 렌더링하기

addEventListener로 이벤트 연결하기
onClick, onChange 같은 JSX 속성 사용하기

일반 변수로 화면 데이터 관리하기
useState로 화면 데이터 관리하기

처음 실행할 코드 직접 호출하기
useEffect로 렌더링 이후 작업 실행하기
```

이번 실습에서 가장 중요한 문장은 이것입니다.

```txt
React에서는 DOM을 직접 고치지 않는다.
데이터를 바꾸면 React가 화면을 다시 그린다.
```

## 핵심 개념

`컴포넌트`

화면의 한 부분을 담당하는 함수입니다. 예를 들어 버튼, 카드, 목록, 헤더를 각각 컴포넌트로 만들 수 있습니다.

```tsx
function Button() {
  return <button>확인</button>
}
```

`JSX`

JavaScript 안에서 HTML처럼 UI를 작성하는 문법입니다. 정확히는 HTML이 아니라 JavaScript 표현식입니다.

```tsx
const name = '민수'

function Profile() {
  return <p>{name}</p>
}
```

`props`

부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터입니다.

```tsx
function Parent() {
  return <Child name="민수" />
}

function Child({ name }: { name: string }) {
  return <p>{name}</p>
}
```

`state`

화면에 영향을 주는 데이터입니다. state가 바뀌면 React가 화면을 다시 렌더링합니다.

```tsx
const [count, setCount] = useState(0)
```

`useEffect`

컴포넌트가 화면에 렌더링된 뒤 실행할 작업을 작성할 때 사용합니다. API 호출이 대표적인 예시입니다.

```tsx
useEffect(() => {
  console.log('처음 한 번 실행')
}, [])
```

`map`

배열 데이터를 반복해서 여러 개의 컴포넌트로 렌더링할 때 사용합니다.

```tsx
{users.map((user) => (
  <UserItem key={user.id} user={user} />
))}
```

`key`

React가 반복 렌더링된 항목들을 구분하기 위해 사용하는 고유한 값입니다. 보통 데이터의 `id`를 사용합니다.

## 폴더 구조

```txt
src
├─ apis
│  └─ movieApi.ts
├─ assets
│  ├─ Logo.png
│  └─ star-icon.svg
├─ components
│  ├─ Header
│  │  ├─ Header.tsx
│  │  └─ Header.css
│  ├─ MovieCard
│  │  ├─ MovieCard.tsx
│  │  └─ MovieCard.css
│  └─ MovieList
│     ├─ MovieList.tsx
│     └─ MovieList.css
├─ constants
│  └─ movie.ts
├─ mocks
│  └─ movies.ts
├─ styles
│  └─ reset.css
├─ types
│  └─ movie.ts
├─ App.tsx
├─ App.css
├─ index.css
└─ main.tsx
```

## 파일별 역할

`src/mocks/movies.ts`

처음 렌더링을 눈으로 확인하기 위한 샘플 영화 데이터가 있습니다. API를 연결하기 전까지 이 데이터를 사용합니다.

`src/apis/movieApi.ts`

TMDB 인기 영화 API를 호출하는 함수가 있습니다. 마지막 단계에서 사용합니다.

`src/types/movie.ts`

TMDB API 응답과 영화 데이터의 TypeScript 타입이 정의되어 있습니다.

`src/constants/movie.ts`

API 주소와 이미지 기본 주소가 상수로 정의되어 있습니다.

`src/components/MovieList/MovieList.tsx`

영화 배열을 받아 여러 개의 `MovieCard`를 렌더링하는 컴포넌트입니다.

`src/components/MovieCard/MovieCard.tsx`

영화 한 개를 카드 UI로 보여주는 컴포넌트입니다.

`src/App.tsx`

처음에는 샘플 데이터를 `MovieList`에 전달합니다. 마지막에는 API에서 받아온 데이터를 state에 저장하고 전달합니다.

## 작업 순서

아래 순서대로 진행하세요. 각 단계가 끝날 때마다 브라우저에서 화면이 어떻게 바뀌는지 확인합니다.

## 시작 상태 확인

파일을 수정하기 전에 `npm run dev`를 실행하고 화면을 확인합니다.

보여야 하는 것:

```txt
상단 로고
"지금 인기있는 영화" 제목
아직 영화 카드는 보이지 않음
```

현재 `App.tsx`는 `sampleMovies`를 `MovieList`에 넘기고 있습니다. 하지만 `MovieList`가 아직 배열을 렌더링하지 않기 때문에 카드가 보이지 않습니다.

## TODO 1. MovieList에서 배열 반복 렌더링

파일: `src/components/MovieList/MovieList.tsx`

해야 할 일:

```txt
movies 배열을 반복합니다.
각 영화 데이터마다 MovieCard 컴포넌트를 렌더링합니다.
반복 렌더링하는 컴포넌트에는 key를 넣습니다.
```

필요한 개념 키워드:

```txt
배열 map
컴포넌트 import
props 전달
key
```

방식 예제:

```tsx
function TodoList({ todos }: { todos: { id: number; text: string }[] }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
```

화면 확인:

```txt
샘플 데이터 개수만큼 카드 영역이 생깁니다.
아직 제목과 포스터를 작성하지 않았기 때문에 카드가 완성된 모습은 아닙니다.
별 아이콘만 먼저 보일 수 있습니다.
```

## TODO 2. MovieCard에서 제목 렌더링

파일: `src/components/MovieCard/MovieCard.tsx`

해야 할 일:

```txt
props로 받은 movie 데이터에서 제목을 꺼내 화면에 보여줍니다.
```

필요한 개념 키워드:

```txt
props
JSX 안에서 값 출력
className
```

방식 예제:

```tsx
function UserName({ user }: { user: { name: string } }) {
  return <p className="user-name">{user.name}</p>
}
```

Vanilla JavaScript에서 문자열 템플릿으로 값을 넣었다면:

```js
`<p>${user.name}</p>`
```

React에서는 JSX 안에서 중괄호를 사용합니다.

```tsx
<p>{user.name}</p>
```

화면 확인:

```txt
각 카드에 영화 제목이 보입니다.
```

## TODO 3. MovieCard에서 평점 렌더링

파일: `src/components/MovieCard/MovieCard.tsx`

해야 할 일:

```txt
props로 받은 movie 데이터에서 평점을 꺼내 화면에 보여줍니다.
평점은 소수점 한 자리까지만 보여줍니다.
```

필요한 개념 키워드:

```txt
number
toFixed
JSX 표현식
```

방식 예제:

```tsx
function ProductScore({ product }: { product: { score: number } }) {
  return <span>{product.score.toFixed(1)}</span>
}
```

`toFixed(1)`은 숫자를 소수점 한 자리 문자열로 바꿔줍니다.

```txt
7.846 -> "7.8"
8 -> "8.0"
```

화면 확인:

```txt
각 카드에 평점 숫자와 별 아이콘이 함께 보입니다.
```

## TODO 4. MovieCard에서 포스터 렌더링

파일: `src/components/MovieCard/MovieCard.tsx`

해야 할 일:

```txt
movie 데이터 안에 있는 포스터 경로를 사용해서 img 태그를 렌더링합니다.
이미지 주소는 constants에 있는 이미지 기본 주소와 포스터 경로를 합쳐서 만듭니다.
이미지 설명에는 영화 제목을 사용합니다.
```

필요한 개념 키워드:

```txt
JSX
props
img 태그
src 속성
alt 속성
중괄호로 JavaScript 값 사용하기
상수 import
```

방식 예제:

```tsx
const PROFILE_BASE_URL = 'https://example.com/profiles/'

function UserProfile({ user }: { user: { name: string; imagePath: string } }) {
  return (
    <img
      src={PROFILE_BASE_URL + user.imagePath}
      alt={user.name}
    />
  )
}
```

위 예제의 핵심은 `src`에 문자열을 직접 고정하지 않고, JavaScript 표현식으로 이미지 주소를 만든다는 점입니다.

화면 확인:

```txt
카드에 포스터, 제목, 평점이 모두 보입니다.
이 단계까지는 아직 API 데이터가 아니라 sampleMovies 데이터입니다.
```

## TODO 5. App에서 영화 목록 state 만들기

파일: `src/App.tsx`

해야 할 일:

```txt
API에서 받아온 영화 목록을 저장할 state를 만듭니다.
초기값은 아직 영화 데이터를 불러오기 전이므로 빈 배열입니다.
```

필요한 개념 키워드:

```txt
useState
state
setState
TypeScript 제네릭
배열 초기값
```

방식 예제:

```tsx
import { useState } from 'react'

interface Todo {
  id: number
  text: string
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  return <div>{todos.length}</div>
}
```

일반 변수와 state의 차이:

```tsx
let count = 0
```

일반 변수는 값이 바뀌어도 React가 화면을 다시 그려야 하는지 알 수 없습니다. 화면에 영향을 주는 데이터는 state로 관리합니다.

화면 확인:

```txt
아직 MovieList에는 sampleMovies를 전달하고 있으므로 화면 변화가 없어도 정상입니다.
```

## TODO 6. App에서 useEffect로 API 호출하기

파일: `src/App.tsx`

해야 할 일:

```txt
컴포넌트가 처음 화면에 나타났을 때 API를 호출합니다.
API에서 받은 데이터를 TODO 5에서 만든 state에 저장합니다.
```

필요한 개념 키워드:

```txt
useEffect
비동기 함수
async/await
API 호출
state 업데이트
dependency array
```

방식 예제:

```tsx
import { useEffect, useState } from 'react'

async function fetchUsers() {
  const response = await fetch('/api/users')
  return response.json()
}

function UserPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUsers()
      setUsers(data)
    }

    loadUsers()
  }, [])

  return <div>{users.length}</div>
}
```

`[]`는 이 effect를 처음 렌더링될 때 한 번만 실행하겠다는 뜻입니다.

화면 확인:

```txt
아직 MovieList에는 sampleMovies를 전달하고 있으므로 화면 변화가 없어도 정상입니다.
브라우저 개발자 도구 Network 탭에서 API 요청이 보일 수 있습니다.
```

## TODO 7. MovieList에 API 데이터 전달하기

파일: `src/App.tsx`

해야 할 일:

```txt
지금 MovieList에 전달하고 있는 sampleMovies를 state에 저장된 영화 목록으로 교체합니다.
```

필요한 개념 키워드:

```txt
props
부모 컴포넌트
자식 컴포넌트
데이터 전달
state 기반 렌더링
```

방식 예제:

```tsx
function Parent() {
  const names = ['민수', '지영', '서연']

  return <Child names={names} />
}

function Child({ names }: { names: string[] }) {
  return <p>{names.length}</p>
}
```

위 예제에서 `Parent`는 데이터를 가지고 있고, `Child`는 props로 받은 데이터를 사용합니다.

화면 확인:

```txt
샘플 영화 대신 API에서 받아온 인기 영화 목록이 보입니다.
카드 개수가 늘어나고 실제 인기 영화 데이터가 표시되면 성공입니다.
```

## 데이터 흐름

실습이 끝났을 때 데이터는 아래 방향으로 이동합니다.

```txt
App
movies state 보관
MovieList에 movies props 전달
MovieList에서 map으로 MovieCard 반복 렌더링
MovieCard에서 영화 정보 출력
```

## 체크리스트

실습이 끝나면 아래를 확인하세요.

```txt
처음에는 Header와 섹션 제목만 보인다.
TODO 1 이후 카드 영역이 반복되어 보인다.
TODO 2 이후 영화 제목이 보인다.
TODO 3 이후 평점이 보인다.
TODO 4 이후 포스터가 보인다.
TODO 5 이후 영화 목록 state가 만들어져 있다.
TODO 6 이후 API 호출 코드가 실행된다.
TODO 7 이후 API에서 받아온 영화 목록이 화면에 보인다.
```

## 자주 나는 에러

`Cannot find name 'useState'`

`useState`를 import하지 않았을 때 발생합니다.

```tsx
import { useState } from 'react'
```

`Cannot find name 'useEffect'`

`useEffect`를 import하지 않았을 때 발생합니다.

```tsx
import { useEffect } from 'react'
```

`Cannot find name 'Movie'`

`Movie` 타입을 import하지 않았을 때 발생합니다. 필요한 파일에서 `Movie` 타입을 가져와야 합니다.

`IMAGE_BASE_URL is not defined`

이미지 기본 주소 상수를 import하지 않았을 때 발생합니다. 필요한 파일에서 `IMAGE_BASE_URL` 상수를 가져와야 합니다.

`Each child in a list should have a unique "key" prop`

`map()`으로 컴포넌트를 반복 렌더링하면서 `key`를 넣지 않았을 때 발생합니다.

```tsx
<Component key={item.id} item={item} />
```
