import { configureStore } from '@reduxjs/toolkit';

import users from './slices/usersSlice';

import albums from './slices/albumsSlice';

import photos from './slices/photosSlice';

const store = configureStore({
  reducer: { users, albums, photos }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';

export default store;
