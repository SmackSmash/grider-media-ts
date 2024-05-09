import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Album {
  _id: string;
  userId: string;
  title: string;
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getAlbumsByUserId: builder.query<Album[], string>({
      query: userId => ({
        url: `albums/${userId}`,
        method: 'GET'
      })
    }),
    createAlbumForUser: builder.mutation<Album, string>({
      query: userId => ({ url: `albums/${userId}`, method: 'POST' })
    }),
    deleteAlbum: builder.mutation<Album, string>({
      query: id => ({ url: `albums/${id}`, method: 'DELETE' })
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
