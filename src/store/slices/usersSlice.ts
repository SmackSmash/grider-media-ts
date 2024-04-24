import { createSlice } from '@reduxjs/toolkit';

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
  reducers: {}
});

export default usersSlice.reducer;
