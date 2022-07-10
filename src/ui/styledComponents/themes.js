export const themesNames = {
  light: 'light',
  dark: 'dark',
};

const colors = {
  green: '#328E3E',
  lightGreen: '#DDFFE2',
  darkBlue: '#07032E',
  lessDarkBlue: '#0B0276',
  blue: '#2C85EE',
  lightBlue: '#C5DFFE',
  gray: '#C4C4C4',
  purple: '#9F11D0',
  lightPurple: '#EBB0FF',
  white: '#FDFDFD',
};

export const lightTheme = {
  name: themesNames.light,
  body: colors.white,
  fontColor: colors.darkBlue,
  logo: colors.green,
  header: colors.lightGreen,
};

export const darkTheme = {
  name: themesNames.dark,
  body: colors.darkBlue,
  fontColor: colors.white,
  logo: colors.lightGreen,
  header: colors.lessDarkBlue,
};
