import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const singlesApi = createApi({
  reducerPath: 'singles',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getSinglesByAlbumId: builder.query({
      query: albumId => ({
        url: `singles/${albumId}`,
        method: 'GET'
      })
    })
  })
});

export const { useGetSinglesByAlbumIdQuery } = singlesApi;

export default singlesApi;
