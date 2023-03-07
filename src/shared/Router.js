import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DetailTodo from '../pages/DetailTodo';


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