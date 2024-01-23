import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAyah = createAsyncThunk('ayah/fetch', async () => {
  const response = await axios.get('https://muallim-web.vercel.app/ayah');

  return response.data;
});

export { fetchAyah };
