import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

import albums from './slices/albumsSlice';

import photos from './slices/photosSlice';

export * from './thunks/fetchUsers';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';

const store = configureStore({
  reducer: { users, albums, photos }
});

export default store;
