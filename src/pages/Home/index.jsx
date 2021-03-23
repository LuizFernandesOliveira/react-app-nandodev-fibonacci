import {
  Container,
  Content,
} from './style';

import Header from '../../components/Header';
import FibonacciList from '../../components/FibonacciList';

const Home = () => {
  return (
    <Container>
      <Header />
      <Content>
        <FibonacciList />
      </Content>
    </Container>
  );
}

export default Home;