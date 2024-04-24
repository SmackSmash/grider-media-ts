import { createSlice } from '@reduxjs/toolkit';

interface Photo {
  id: string;
  url: string;
  albumId: string;
}

interface PhotosState {
  data: Photo[];
  isLoading: boolean;
  error: null | string;
}

const initialState: PhotosState = {
  data: [],
  isLoading: false,
  error: null
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {}
});

export default photosSlice.reducer;
