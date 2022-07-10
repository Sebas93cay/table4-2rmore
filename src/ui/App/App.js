import '../../styles.css';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from '../Header/Header';
import { Page } from '../Page/Page';
import { GlobalStyles } from '../styledComponents/globarStyles';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Page>
          <Header />
        </Page>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
