import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useAppSelector } from '../store';
import Skeleton from './Skeleton';
import useThunk from '../hooks/useThunk';

const UsersList = () => {
  const users = useAppSelector(({ users: { data } }) => data);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

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
