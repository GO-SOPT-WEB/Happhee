import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyle";
import theme from "./styles/theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>웹팟이네용</div>
    </ThemeProvider>
  </>
);

export default App;
