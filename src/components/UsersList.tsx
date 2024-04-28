import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useAppDispatch } from '../store';

const UsersList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <h1>UsersList Works</h1>;
};

export default UsersList;
