import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: 'Just a quick test',
  reducers: {
    changeValue: state => {
      state = 'Look I can change!';
      return state;
    }
  }
});

export default testSlice.reducer;
export const { changeValue } = testSlice.actions;
