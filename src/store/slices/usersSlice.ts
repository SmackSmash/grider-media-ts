import { createSlice } from '@reduxjs/toolkit';
import fetchUsers from '../thunks/fetchUsers';

interface User {
  name: string;
  id: string;
}

interface UsersState {
  data: User[];
  isLoading: boolean;
  error: null | Error;
}

const initialState: UsersState = {
  data: [],
  isLoading: false,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  }
});

export default usersSlice.reducer;
