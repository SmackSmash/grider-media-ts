import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';

const store = configureStore({
  reducer: { users }
});

export default store;
