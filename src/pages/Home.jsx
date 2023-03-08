import ShowTodo from '../components/Show/ShowTodo';
import Header from '../components/Header/Header';
import InputForm from '../components/Input/InputForm';
import styled from 'styled-components';

const Home = () => {
  return (
    <Layout>
      <Header />
      <InputForm />
      <ShowTodo />
    </Layout>
  )
}

export default Home;

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`

