# Todolist 리덕스와 스타일 컴포넌트 적용하여 만들기
## 진행중...


### 💡기능규현:'추가'버튼 만들기 중.....

### 1.트러블슈팅

🤔에러내용:
<img width="953" alt="Untitled (1)" src="https://user-images.githubusercontent.com/105100315/223053059-a73b702d-aaf4-4ffb-94f4-806512de69b2.png">

☝️에러원인:provider 사용안함

✅해결방법:

store을 사용했으면 index.js 에서 리덕스 훅Provider, configSotre.js에서 store를 import후 

provider를 sotre를 사용해서 app을 감싸줘야한다.
```
//index.js

// 추가할 코드
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  //App을 Provider로 감싸주고, configStore에서 export default 한 store를 넣어줍니다.
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
```

### 2.트러블슈팅

🤔에러내용

![Untitled (1)](https://user-images.githubusercontent.com/105100315/223053697-d1fa929f-3989-4556-8474-42d8c0c28a37.png)
:

☝️에러원인:
const todolists = useSelector((state) => state.todolists.todolists)기존 코드중 가지고오는 객체 이름을 잘못 설정함 

렌더링하여 표시할 데이터가 String, Number 등의 `원시타입`데이터인 지 확인하여 코드를 작성안함

✅에러해결방법:

내가 가지고 오고 싶은 값은 object의 key값이다. 다시한번 확인후 알맞은 key값으로 설정한다.
```
const App = () => {
  const [title, setTitle] = useState('')//로컬 state값 
  const todolists = useSelector((state) => state.todolists.todolists)//배열 key값 잘 작성 해야함
  const dispatch = useDispatch();
```

### 3.트러블슈팅
🤔에러내용:
form테그에서 계속해서 버튼을 클릭하면 초기화가 된다.

☝️에러이유:
form의 버튼을 클릭하면 제출이되고 페이지를 다시 불러오기 때문에 컴포넌트가 리렌더링이 다시 된다.

✅에러해결방법:
`e.preventDefault()` 를사용하여 기존의 제출방식을 억제 시킨다.
