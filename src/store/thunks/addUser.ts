import { createAsyncThunk } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { delay } from '../../utils';

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3000/users', {
    name: faker.person.fullName()
  });
  await delay(300);
  return response.data;
});
