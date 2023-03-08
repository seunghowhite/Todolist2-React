import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailTodo from '../pages/DetailTodo.js/DetailTodo';
import Home from '../pages/Home';



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detailtodo/:id' element={<DetailTodo />}></Route>
      </Routes>
    </BrowserRouter >
  )
}

export default Router