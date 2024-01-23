import { createSlice } from '@reduxjs/toolkit';
import { fetchAyah } from '../thunks/fetchAyah';

const ayahSlice = createSlice({
  name: 'ayah',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder) {
    builder.addCase(fetchAyah.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAyah.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAyah.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const ayahReducer = ayahSlice.reducer;
