import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useAppDispatch, useAppSelector } from '../store';
import Skeleton from './Skeleton';

const UsersList = () => {
  const users = useAppSelector(({ users: { data } }) => data);
  const isLoading = useAppSelector(({ users: { isLoading } }) => isLoading);
  const error = useAppSelector(({ users: { error } }) => error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={5} className='h-10 w-full my-2' />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {users.length
        ? users.map(({ name, id }) => <h1 key={id}>{name}</h1>)
        : 'No users yet'}
    </div>
  );
};

export default UsersList;
