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
    deleteAlbum: builder.mutation<Album, string>({
      query: albumId => ({ url: `/${albumId}`, method: 'DELETE' })
      // TODO: Take userId and albumId as arguments so you can delete the album
      //       and rerender only the affiliated user.
      // invalidatesTags: (_result, _error, userId) => [{ type: 'Album', id: userId }]
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
