import { useEffect, useState } from 'react';
import { fetchUsers } from '../store';
import { useAppDispatch, useAppSelector } from '../store';
import Skeleton from './Skeleton';
import { type AxiosError } from 'axios';

const UsersList = () => {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState<AxiosError | null>(
    null
  );

  const users = useAppSelector(({ users: { data } }) => data);

  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      setIsLoadingUsers(true);
      try {
        await dispatch(fetchUsers()).unwrap();
      } catch (error) {
        setLoadingUsersError(error as AxiosError);
      } finally {
        setIsLoadingUsers(false);
      }
    })();
  }, [dispatch]);

  if (isLoadingUsers) {
    return <Skeleton times={5} className='h-10 w-full my-2' />;
  }

  if (loadingUsersError) {
    return (
      <span className='text-poimandres-lightpink'>
        {loadingUsersError.message}
      </span>
    );
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
