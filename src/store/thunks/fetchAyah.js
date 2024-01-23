import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAyah = createAsyncThunk('ayah/fetch', async () => {
  const response = await axios.get('http://localhost:3005/ayah');

  return response.data;
});

export { fetchAyah };
