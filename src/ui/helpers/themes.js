import { themeColors } from './colors';

export const themesNames = Object.freeze({
  light: 'light',
  dark: 'dark',
});

export const alphaChannelShadows = {
  lightTheme: '50',
  darkTheme: '30',
};

export const alphaShadowLayer = {
  lightTheme: 'cc',
  darkTheme: '77',
};

export const lightTheme = {
  name: themesNames.light,
  body: themeColors.white,
  fontColor: themeColors.darkBlue,
  logo: themeColors.green,
  header: themeColors.lightGreen,
  headerShadow: `${themeColors.green}44`,
  hoverLinksColor: `${themeColors.green}33`,
  bigName: themeColors.blue,
  bigNameShadow: themeColors.blue + alphaChannelShadows.lightTheme,
  hiMessage: themeColors.purple,
  hiMessageShadow: themeColors.purple + alphaChannelShadows.lightTheme,
  dropDownMenu: themeColors.lightGreen + 'BB',
  dropDownMenuShadow: themeColors.white + alphaChannelShadows.lightTheme,
  dropDownMenuBorder: themeColors.darkBlue,
  shadowLayer: themeColors.darkBlue + alphaShadowLayer.lightTheme,
  shadowLayerTransparent: themeColors.darkBlue + '00',
  shadowBoxPosition: `1px 2px 5px 2px`,
  shadowTextPosition: '2px 2px 0px',
  projectItemBorder: themeColors.gray,
  sectionTitle: themeColors.green,
  sectionTitleShadow: themeColors.green + alphaChannelShadows.lightTheme,
};

export const darkTheme = {
  name: themesNames.dark,
  body: themeColors.darkBlue,
  fontColor: themeColors.white,
  logo: themeColors.lightGreen,
  header: themeColors.lessDarkBlue,
  headerShadow: `${themeColors.lightBlue}44`,
  hoverLinksColor: `${themeColors.blue}99`,
  bigName: themeColors.blue,
  bigNameShadow: themeColors.lightBlue + alphaChannelShadows.darkTheme,
  hiMessage: themeColors.purple,
  hiMessageShadow: themeColors.lightPurple + alphaChannelShadows.darkTheme,
  dropDownMenuBorder: themeColors.lightBlue,
  dropDownMenu: themeColors.darkBlue + '99',
  dropDownMenuShadow: themeColors.white + alphaChannelShadows.darkTheme,
  dropDownMenuBorder: themeColors.white,
  shadowLayer: themeColors.black + alphaShadowLayer.darkTheme,
  shadowLayerTransparent: themeColors.black + '00',
  shadowBoxPosition: `1px 2px 5px 2px`,
  shadowTextPosition: '2px 2px 1px',
  shadowAlpha: '44',
  projectItemBorder: themeColors.white,
  sectionTitle: themeColors.green,
  sectionTitleShadow: themeColors.green + alphaChannelShadows.darkTheme,
};
