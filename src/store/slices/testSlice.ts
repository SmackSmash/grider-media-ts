import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [];

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.push(action.payload);
    }
  }
});

export default testSlice.reducer;
export const { addValue } = testSlice.actions;
