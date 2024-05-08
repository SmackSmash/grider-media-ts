import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Album {
  id: string;
  title: string;
  userId: string;
}

const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getAlbumsByUserId: builder.query<Album, string>({
      query: userId => ({
        url: `albums/${userId}`,
        method: 'GET'
      })
    }),
    createAlbum: builder.query<Album, string>({
      query: () => ({ url: 'albums', method: 'POST' })
    }),
    deleteAlbum: builder.query<Album, string>({
      query: id => ({ url: `albums/${id}`, method: 'DELETE' })
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumQuery, useDeleteAlbumQuery } = albumsApi;

export default albumsApi;
