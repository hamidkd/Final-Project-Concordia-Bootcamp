import Styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <Div className="App">
      <GlobalStyles />
      This is App comp.
    </Div>
  );
}

export default App;

const Div = Styled.div`

background: pink;
padding: 1rem;
border-radius: 1rem;
`;
