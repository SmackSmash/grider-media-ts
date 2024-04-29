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
        ? users.map(({ name, id }) => (
            <div
              className='flex h-10 w-full p-2 my-2 items-center bg-poimandres-darkslate'
              key={id}>
              {name}
            </div>
          ))
        : 'No users yet'}
    </div>
  );
};

export default UsersList;
