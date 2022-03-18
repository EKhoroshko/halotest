import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from './operation'

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    products: [],
    error: null,
  }, extraReducers: {
    [getProducts.pending]: (state, _) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  }
});

export default productSlice.reducer;