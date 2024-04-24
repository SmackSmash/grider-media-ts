import { SerializedError, createSlice } from '@reduxjs/toolkit';

interface Photo {
  id: string;
  url: string;
  albumId: string;
}

interface PhotosState {
  data: Photo[];
  isLoading: boolean;
  error: null | SerializedError;
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
