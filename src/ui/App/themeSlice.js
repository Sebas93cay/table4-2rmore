import { darkTheme, lightTheme, themesNames } from '../styledComponents/themes';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: darkTheme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      console.log('en el reducer');
      state.value =
        state.value.name === themesNames.light ? darkTheme : lightTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const { reducer: themeReducer } = themeSlice;
