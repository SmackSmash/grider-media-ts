import { createAsyncThunk } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { delay } from '../../utils';

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3000/users', {
    name: faker.person.fullName(),
    id: nanoid()
  });
  await delay(1000);
  return response.data;
});
