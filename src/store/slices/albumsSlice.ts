import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {}
});

export default albumsSlice.reducer;
