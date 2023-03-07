import { createStore, combineReducers } from 'redux';

import todolists from '../modules/todolists';

const rootReducer = combineReducers({
  storetodolists: todolists
})
const store = createStore(rootReducer);


export default store