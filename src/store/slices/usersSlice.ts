import { SerializedError, createSlice } from '@reduxjs/toolkit';
import fetchUsers from '../thunks/fetchUsers';

interface User {
  name: string;
  id: string;
}

interface UsersState {
  data: User[];
  isLoading: boolean;
  error: null | SerializedError;
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
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  }
});

export default usersSlice.reducer;
