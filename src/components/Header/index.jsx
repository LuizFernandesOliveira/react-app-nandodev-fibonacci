import {
  Container,
  Content, DocumentationLink, Title,
} from './style';

const Header = () => {
  return (
    <Container>
      <Content>
        <Title>
          Fibonacci
        </Title>
        <DocumentationLink href="https://nandodev-fibonacci.herokuapp.com/swagger-ui.html" target="_blank">
          API Documentação
        </DocumentationLink>
      </Content>
    </Container>
  );
}

export default Header;