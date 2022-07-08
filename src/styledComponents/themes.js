import { createGlobalStyle } from 'styled-components';

export const themesStrings = {
  light: 'light',
  dark: 'dark',
};

export const lightTheme = {
  name: themesStrings.light,
  body: '#FDFDFD',
  fontColor: '#07032E',
};

export const darkTheme = {
  name: themesStrings.dark,
  fontColor: '#FDFDFD',
  body: '#07032E',
};

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.body}
}
`;
