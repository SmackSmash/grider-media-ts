import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Album {
  id: string;
  title: string;
  userId: string;
}

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAlbumsByUserId: builder.query<Album, string>({
      query: (userId) => `albums?userId=${userId}`,
    }),
    createAlbum: builder.query<Album, string>({
      query: () => "albums",
    }),
    deleteAlbum: builder.query<Album, string>({
      query: (id) => `albums/${id}`,
    }),
  }),
});

export default albumsApi;
