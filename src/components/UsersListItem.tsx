import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import { FaAngleDown } from 'react-icons/fa';
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

  const header = (
    <>
      <div className='flex items-center'>
        <FaAngleDown className='mr-2' />
        {name}
      </div>
      <Button
        danger
        loading={isDeletingUser}
        onClick={e => handleDelete(id, e)}>
        {deletingUserError ? 'Oopsy!' : 'Delete'}
      </Button>
    </>
  );

  return <ExpandablePanel header={header}>Records!</ExpandablePanel>;
};

export default UsersListItem;
