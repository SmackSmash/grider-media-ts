import { createSlice } from '@reduxjs/toolkit';

interface usersState {
  data: string[];
}

const initialState: usersState = {
  data: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
