import { useEffect } from 'react';
import { fetchUsers, deleteUser } from '../store';
import { useAppSelector } from '../store';
import Skeleton from './Skeleton';
import useThunk from '../hooks/useThunk';
import Button from './Button';

const UsersList = () => {
  const users = useAppSelector(({ users: { data } }) => data);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doDeleteUser] = useThunk(deleteUser);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleClick = (id: string) => {
    doDeleteUser(id);
  };

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
              className='flex h-10 w-full pl-2 my-2 items-center bg-poimandres-darkslate justify-between'
              key={id}>
              {name}
              <Button danger onClick={() => handleClick(id)}>
                Delete
              </Button>
            </div>
          ))
        : 'No users yet'}
    </div>
  );
};

export default UsersList;
