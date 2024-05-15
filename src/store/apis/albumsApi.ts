import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { delay } from '../../utils';

export interface Album {
  _id: string;
  userId: string;
  title: string;
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/albums',
    fetchFn: async (...args) => {
      await delay(1000);
      return fetch(...args);
    }
  }),
  tagTypes: ['Album', 'UsersAlbums'],
  endpoints: builder => ({
    getAlbumsByUserId: builder.query<Album[], string>({
      query: userId => ({ url: `/${userId}`, method: 'GET' }),
      providesTags: (result, _error, userId) => {
        const tags = result!.map(({ _id }) => ({ type: 'Album' as const, id: _id }));
        return [...tags, { type: 'UsersAlbums', id: userId }];
      }
    }),
    createAlbumForUser: builder.mutation<Album, string>({
      query: userId => ({ url: `/${userId}`, method: 'POST' }),
      invalidatesTags: (_result, _error, userId) => [{ type: 'Album', id: userId }]
    }),
    deleteAlbum: builder.mutation<Album, { albumId: string; userId: string }>({
      query: ({ albumId }) => ({ url: `/${albumId}`, method: 'DELETE' }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'Album', id: userId }]
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
