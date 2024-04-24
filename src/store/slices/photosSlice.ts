import { createSlice } from '@reduxjs/toolkit';

interface Photo {
  id: string;
  url: string;
  albumId: string;
}

interface PhotosState {
  data: Photo[];
}

const initialState: PhotosState = {
  data: []
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {}
});

export default photosSlice.reducer;
