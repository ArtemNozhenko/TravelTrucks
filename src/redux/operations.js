import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async ({ page = 1, ...query }, thunkAPI) => {
    try {
      console.log('page:', page, 'query:', query);
      const response = await axios.get('/campers', {
        params: { ...query, page, limit: 4 },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  'campers/fetchCamperDetails',
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/campers/:${camperId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
