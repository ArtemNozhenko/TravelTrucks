import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperDetails } from './operations.js';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
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

      .addCase(fetchCamperDetails.pending, state => {
        state.error = false;
        state.loading = true;
        state.selectedCamper = null;
      })
      .addCase(fetchCamperDetails.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
        state.loading = false;
      })
      .addCase(fetchCamperDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
