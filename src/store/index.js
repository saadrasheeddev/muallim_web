import { configureStore } from '@reduxjs/toolkit';
import { ayahReducer } from './slices/ayahSlice';

export const store = configureStore({
  reducer: {
    ayahs: ayahReducer,
  },
});

export * from './thunks/fetchAyah';
