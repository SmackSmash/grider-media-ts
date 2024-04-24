import { SerializedError, createSlice } from '@reduxjs/toolkit';

interface Album {
  id: string;
  title: string;
  userId: string;
}

interface AlbumsState {
  data: Album[];
  isLoading: boolean;
  error: null | SerializedError;
}

const initialState: AlbumsState = {
  data: [],
  isLoading: false,
  error: null
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
});

export default albumsSlice.reducer;
