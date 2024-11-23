// src/slices/LanguageSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const LanguageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'English', // Default language
  },
  reducers: {
    setLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;
