import { createSlice } from '@reduxjs/toolkit';

interface Album {
  id: string;
  title: string;
  userId: string;
}

interface AlbumsState {
  data: Album[];
}

const initialState: AlbumsState = {
  data: []
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
});

export default albumsSlice.reducer;
