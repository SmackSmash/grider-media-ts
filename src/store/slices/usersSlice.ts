import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
