import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div>
      <h1>Hello, world!</h1>
    </div>
  </ThemeProvider>
);

export default App;
