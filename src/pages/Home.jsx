import DoneTodo from '../components/DoneTodo';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import ShowTodo from '../components/ShowTodo';


const Home = () => {
  return (
    <>
      <Header />
      <InputForm />
      <ShowTodo />
      <DoneTodo />
    </>
  )
}



export default Home;