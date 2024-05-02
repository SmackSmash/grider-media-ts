import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import users from './slices/usersSlice';

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';

import albumsApi from './apis/albumsApi';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';

const store = configureStore({
  reducer: {
    users,
    [albumsApi.reducerPath]: albumsApi.reducer
  }
});

const dan = {
  name: 'Dan',
  age: 37
};

export default store;
