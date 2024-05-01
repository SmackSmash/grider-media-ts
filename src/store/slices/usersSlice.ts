import { type SerializedError, createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../';
import { addUser } from '../';
import { deleteUser } from '../';

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
    // Fetch users
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
    // Add user
    builder.addCase(addUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // Delete user
    builder.addCase(deleteUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.splice(
        state.data.findIndex(user => user.id === action.payload.id),
        1
      );
    });
  }
});

export default usersSlice.reducer;
