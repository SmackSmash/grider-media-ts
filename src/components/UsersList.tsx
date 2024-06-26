import { useEffect } from 'react';
import { fetchUsers } from '../store';
import { useAppSelector } from '../store';
import Skeleton from './Skeleton';
import useThunk from '../hooks/useThunk';
import UsersListItem from './UsersListItem';

const UsersList = () => {
  const users = useAppSelector(({ users: { data } }) => data);
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  if (isLoadingUsers) {
    return <Skeleton times={5} className='h-10 w-full mt-2 mb-4' />;
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
            <UsersListItem name={name} id={id} key={id} />
          ))
        : 'No users yet'}
    </div>
  );
};

export default UsersList;
