import { configureStore } from '@reduxjs/toolkit';

import test from './slices/testSlice.ts';
export { addValue } from './slices/testSlice.ts';

const store = configureStore({
  reducer: {
    test
  }
});

export default store;
