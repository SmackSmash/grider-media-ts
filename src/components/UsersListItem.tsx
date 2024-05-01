import Button from './Button';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import { type MouseEvent } from 'react';

interface UsersListItemProps {
  name: string;
  id: string;
}

const UsersListItem = ({ name, id }: UsersListItemProps) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDelete = (id: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    doDeleteUser(id);
  };

  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div
      className='flex h-10 w-full pl-2 my-2 items-center justify-between hover:bg-poimandres-darkslate hover:cursor-pointer'
      onClick={handleClick}>
      {name}
      <Button
        danger
        loading={isDeletingUser}
        onClick={e => handleDelete(id, e)}>
        {deletingUserError ? 'Oopsy!' : 'Delete'}
      </Button>
    </div>
  );
};

export default UsersListItem;
