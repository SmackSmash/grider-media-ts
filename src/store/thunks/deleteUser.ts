import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay } from '../../utils';

export const deleteUser = createAsyncThunk('users/delete', async (id: string) => {
  const response = await axios.delete(`http://localhost:3000/users/${id}`);
  await delay(300);
  return response.data;
});
