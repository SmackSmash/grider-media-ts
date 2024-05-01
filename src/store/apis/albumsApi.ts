import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Album {
  id: string;
  title: string;
  userId: string;
}

const albumsApi = createApi({
  // Does this work?
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: builder => ({
    getAlbumsByUserId: builder.query<Album, string>({
      query: userId => `albums?userId=${userId}`
    })
  })
});

export default albumsApi;
