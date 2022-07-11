import { themeColors } from './colors';
import { shadows } from './measures';

export const themesNames = Object.freeze({
  light: 'light',
  dark: 'dark',
});

/**
 * shadowGenerator creates a function with default values for shadow properties
 */
// const shadowGenerator =
//   ({ defaultColor, defaultAlpha = shadows.shadowAlpha }) =>
//   ({ color = defaultColor, alpha = defaultAlpha } = new Object()) =>
//     `${shadows.shadowPosition} ${color}${alpha}`;

export const lightTheme = {
  name: themesNames.light,
  body: themeColors.white,
  fontColor: themeColors.darkBlue,
  logo: themeColors.green,
  header: themeColors.lightGreen,
  headerShadow: `${shadows.shadowPosition} ${themeColors.green}${shadows.shadowAlpha}`,
  hoverLinksColor: `${themeColors.green}33`,
};

export const darkTheme = {
  name: themesNames.dark,
  body: themeColors.darkBlue,
  fontColor: themeColors.white,
  logo: themeColors.lightGreen,
  header: themeColors.lessDarkBlue,
  headerShadow: `${shadows.shadowPosition} ${themeColors.lightBlue}${shadows.shadowAlpha}`,
  hoverLinksColor: `${themeColors.blue}99`,
};
