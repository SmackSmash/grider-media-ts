import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { delay } from '../../utils';

export interface Single {
  title: string;
  image: string;
  albumId: string;
  _id: string;
}

const singlesApi = createApi({
  reducerPath: 'singles',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
    fetchFn: async (...args) => {
      // await delay(5000);
      return fetch(...args);
    }
  }),
  tagTypes: ['Single', 'AlbumsSingles'],
  endpoints: builder => ({
    getSinglesByAlbumId: builder.query<Single[], string>({
      query: albumId => ({ url: `singles/${albumId}`, method: 'GET' }),
      providesTags: (result, _error, albumId) => {
        const tags = result!.map(({ _id }) => ({ type: 'Single' as const, id: _id }));
        return [...tags, { type: 'AlbumsSingles', id: albumId }];
      }
    }),
    createSingleForAlbum: builder.mutation<Single, string>({
      query: albumId => ({ url: `singles/${albumId}`, method: 'POST' }),
      invalidatesTags: (_result, _error, albumId) => [{ type: 'AlbumsSingles', id: albumId }]
    })
  })
});

export const { useGetSinglesByAlbumIdQuery, useCreateSingleForAlbumMutation } = singlesApi;

export default singlesApi;
