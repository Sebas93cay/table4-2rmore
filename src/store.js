import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './ui/App/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
