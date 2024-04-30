import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay } from '../../utils';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3000/users');
  await delay(5000);
  return response.data;
});
