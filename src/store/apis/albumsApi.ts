import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Album {
  _id: string;
  userId: string;
  title: string;
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/albums' }),
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
      query: albumId => ({ url: `/${albumId}`, method: 'DELETE' }),
      invalidatesTags: (_result, _error, userId) => [{ type: 'Album', id: userId }]
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
