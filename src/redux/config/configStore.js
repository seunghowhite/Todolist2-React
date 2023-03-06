// craetstore, conbinereducer다운
import { createStore, combineReducers } from 'redux';

// 작성한 모듈의 리듀서를 가지고 오자.
import todolists from '../modules/todolists';



// combine reducers를 만들고 스토어에 저장하자.
const rootReducer = combineReducers({
  storetodolists: todolists
})
//store에 리듀서 모음을 저장하자.
const store = createStore(rootReducer);

//store export하기
export default store