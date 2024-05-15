import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { delay } from '../../utils';
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
      // await delay(1000);
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
      invalidatesTags: (_result, _error, userId) => [{ type: 'UsersAlbums' as const, id: userId }]
    }),
    deleteAlbum: builder.mutation<Album, Album>({
      query: ({ _id }) => ({ url: `/${_id}`, method: 'DELETE' }),
      invalidatesTags: (_result, _error, { _id }) => [{ type: 'Album', id: _id }]
    })
  })
});

export const { useGetAlbumsByUserIdQuery, useCreateAlbumForUserMutation, useDeleteAlbumMutation } =
  albumsApi;

export default albumsApi;
