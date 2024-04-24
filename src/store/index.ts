import { configureStore } from '@reduxjs/toolkit';

import test from './slices/testSlice';
export { addValue } from './slices/testSlice';

const store = configureStore({
  reducer: {
    test
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';
