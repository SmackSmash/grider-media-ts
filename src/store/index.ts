import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

const store = configureStore({
  reducer: { users }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';
