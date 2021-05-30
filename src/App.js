import { Container, Main } from "./AppStyle";
import Header from "./components/Header";
import Cards from "./components/Cards";
import PaginationControl from "./components/PaginationControl";

const App = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Cards />
      </Main>
      <PaginationControl />
    </Container>
  );
};

export default App;
