import Button from './Button';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';

interface UsersListItemProps {
  name: string;
  id: string;
}

const UsersListItem = ({ name, id }: UsersListItemProps) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleClick = (id: string) => {
    doDeleteUser(id);
  };

  return (
    <div
      className='flex h-10 w-full pl-2 my-2 items-center bg-poimandres-darkslate justify-between'
      key={id}>
      {name}
      <Button danger loading={isDeletingUser} onClick={() => handleClick(id)}>
        {deletingUserError ? 'Oopsy!' : 'Delete'}
      </Button>
    </div>
  );
};

export default UsersListItem;
