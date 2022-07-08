import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
  themesStrings,
} from './styledComponents/themes';
function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((theme) =>
      theme.name === themesStrings.light ? darkTheme : lightTheme,
    );
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className='App'>hola</div>;
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
