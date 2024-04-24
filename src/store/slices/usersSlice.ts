import { createSlice } from '@reduxjs/toolkit';

interface User {
  name: string;
  id: string;
}

interface UsersState {
  data: User[];
}

const initialState: UsersState = {
  data: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export default usersSlice.reducer;
