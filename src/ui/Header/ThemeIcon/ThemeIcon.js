import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { themesNames } from '../../styledComponents/themes';
import { MoonIcon, SunIcon, ThemeIconS } from './ThemeIconStyled';
import { toggleTheme } from '../../App/themeSlice';

export const ThemeIcon = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  return (
    <ThemeIconS>
      {theme.name === themesNames.light ? (
        <MoonIcon onClick={() => dispatch(toggleTheme())} />
      ) : (
        <SunIcon onClick={() => dispatch(toggleTheme())} />
      )}
    </ThemeIconS>
  );
};
