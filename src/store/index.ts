import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import users from './slices/usersSlice';
import albumsApi from './apis/albumsApi';

const store = configureStore({
  reducer: {
    users,
    [albumsApi.reducerPath]: albumsApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(albumsApi.middleware)
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export {
  useGetAlbumsByUserIdQuery,
  useCreateAlbumForUserMutation,
  useDeleteAlbumMutation
} from './apis/albumsApi';
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './hooks';
export default store;
