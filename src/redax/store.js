import { configureStore } from '@reduxjs/toolkit';
import productSlice from './product/slice';

export default configureStore({
  reducer: {
    product: productSlice,
  },
})