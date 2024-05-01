import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import { FaAngleDown } from 'react-icons/fa';
import { useState, type MouseEvent } from 'react';

interface UsersListItemProps {
  name: string;
  id: string;
}

const UsersListItem = ({ name, id }: UsersListItemProps) => {
  const [panelOpen, setPanelOpen] = useState(false);
  const [doDeleteUser, isDeletingUser, deletingUserError] =
    useThunk(deleteUser);

  const handleDelete = (id: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    doDeleteUser(id);
  };

  const handleClick = () => {
    setPanelOpen(!panelOpen);
  };

  const header = (
    <div
      className='flex h-10 w-full pl-2 my-2 items-center justify-between hover:bg-poimandres-darkslate hover:cursor-pointer'
      onClick={handleClick}>
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
    </div>
  );

  return (
    <ExpandablePanel header={header}>
      {panelOpen && <div>Records!</div>}
    </ExpandablePanel>
  );
};

export default UsersListItem;
