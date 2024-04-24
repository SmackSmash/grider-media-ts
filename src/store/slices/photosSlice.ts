import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {}
});

export default photosSlice.reducer;
