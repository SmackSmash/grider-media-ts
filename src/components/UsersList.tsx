import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useAppDispatch, useAppSelector } from '../store';

const UsersList = () => {
  const users = useAppSelector(({ users: { data } }) => data);
  const dispatch = useAppDispatch();

  console.log(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {users.length
        ? users.map(({ name, id }) => <h1 key={id}>{name}</h1>)
        : 'No users yet'}
    </div>
  );
};

export default UsersList;
