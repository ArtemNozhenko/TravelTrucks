import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    filters: {},
  },
  reducers: {
    setFilterData: (state, action) => {
      state.filters = { ...action.payload };
    },
    resetFilter: state => {
      state.filters = {};
    },
  },
});

export const { setFilterData, resetFilter } = filterSlice.actions;

export default filterSlice.reducer;
