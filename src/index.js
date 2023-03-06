import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';


//추가한 코드.. 이것때문에 해맸다
import { Provider } from 'react-redux';
import store from "./redux/config/configStore";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider로 감싸주자
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
