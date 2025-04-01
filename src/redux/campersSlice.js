import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    item: [],
    selectedCamper: null,
    loading: false,
    error: null,
    totalItems: 0,
    currentPage: 1,
  },
  reducers: {
    resetCampers: state => {
      state.items = [];
      state.error = null;
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total } = action.payload;
        if (action.meta.arg.page > 1) {
          state.items = [...state.items, ...items];
        } else {
          state.items = items;
        }
        state.currentPage = action.meta.arg.page;
        state.loading = false;
        state.totalItems = total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchCamperById.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.item = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
