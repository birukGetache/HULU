import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../slices/themeSlice';
import languageReducer from '../slices/LanguageSlice';
import UserSlice from '../slices/UserSlice'
// Export the store as a named export
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    user: UserSlice
  },
});
