import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteUser = createAsyncThunk(
  'users/delete',
  async (id: string) => {
    console.log(id);
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    console.log(response.data);
    return response.data;
  }
);
