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
  tagTypes: ['Album'],
  endpoints: builder => ({
    getAlbumsByUserId: builder.query<Album[], string>({
      query: userId => ({ url: `/${userId}`, method: 'GET' }),
      providesTags: (_result, _error, userId) => [{ type: 'Album', id: userId }]
    }),
    createAlbumForUser: builder.mutation<Album, string>({
      query: userId => ({ url: `/${userId}`, method: 'POST' }),
      invalidatesTags: (_result, _error, userId) => [{ type: 'Album', id: userId }]
    }),
    deleteAlbum: builder.mutation<Album, { albumId: string; userId: string }>({
      query: arg => ({ url: `/${arg.albumId}`, method: 'DELETE' }),
      invalidatesTags: (_result, _error, arg) => [{ type: 'Album', id: arg.userId }]
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
