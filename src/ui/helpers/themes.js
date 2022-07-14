import { alphaChannelShadows, alphaShadowLayer, themeColors } from './colors';
import { shadowsMeasures } from './measures';

export const themesNames = Object.freeze({
  light: 'light',
  dark: 'dark',
});

export const lightTheme = {
  name: themesNames.light,
  body: themeColors.white,
  fontColor: themeColors.darkBlue,
  logo: themeColors.green,
  header: themeColors.lightGreen,
  headerShadow: `${themeColors.green}${shadowsMeasures.shadowAlpha}`,
  hoverLinksColor: `${themeColors.green}33`,
  // title: themeColors.green,
  bigName: themeColors.blue,
  bigNameShadow: themeColors.blue + alphaChannelShadows.lightTheme,
  hiMessage: themeColors.purple,
  hiMessageShadow: themeColors.purple + alphaChannelShadows.lightTheme,
  dropDownMenu: themeColors.lightGreen + 'CC',
  dropDownMenuShadow: themeColors.white + alphaChannelShadows.lightTheme,
  dropDownMenuBorder: themeColors.darkBlue,
  shadowLayer: themeColors.darkBlue + alphaShadowLayer.lightTheme,
  shadowLayerTransparent: themeColors.darkBlue + '00',
};

export const darkTheme = {
  name: themesNames.dark,
  body: themeColors.darkBlue,
  fontColor: themeColors.white,
  logo: themeColors.lightGreen,
  header: themeColors.lessDarkBlue,
  headerShadow: `${themeColors.lightBlue}${shadowsMeasures.shadowAlpha}`,
  hoverLinksColor: `${themeColors.blue}99`,
  // title: themeColors.green,
  bigName: themeColors.blue,
  bigNameShadow: themeColors.lightBlue + alphaChannelShadows.darkTheme,
  hiMessage: themeColors.purple,
  hiMessageShadow: themeColors.lightPurple + alphaChannelShadows.darkTheme,
  dropDownMenuBorder: themeColors.lightBlue,
  dropDownMenu: themeColors.darkBlue,
  dropDownMenuShadow: themeColors.white + alphaChannelShadows.darkTheme,
  dropDownMenuBorder: themeColors.white,
  shadowLayer: themeColors.black + alphaShadowLayer.darkTheme,
  shadowLayerTransparent: themeColors.black + '00',
};
