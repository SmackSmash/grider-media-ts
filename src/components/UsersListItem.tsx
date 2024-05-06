import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import useThunk from '../hooks/useThunk';
import { deleteUser } from '../store';
import { type MouseEvent } from 'react';
import AlbumsList from './AlbumsList';

interface UsersListItemProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

const UsersListItem = ({ name, id, email, image }: UsersListItemProps) => {
  const [doDeleteUser, isDeletingUser, deletingUserError] = useThunk(deleteUser);

  const handleDelete = (id: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    doDeleteUser(id);
  };

  const header = (
    <>
      <div className='mr-2 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full'>
        <img
          className='h-full w-full object-cover'
          src={`http://localhost:3000/images/profile/${image}.jpg`}
          alt={name}
        />
      </div>
      <h2>{name}</h2>
      <span className='ml-2 text-xs text-poimandres-midslate'>{email}</span>
      <Button
        className='ml-auto mr-2'
        danger
        loading={isDeletingUser}
        onClick={e => handleDelete(id, e)}
      >
        {deletingUserError ? 'Oopsy!' : 'Delete'}
      </Button>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList id={id} />
    </ExpandablePanel>
  );
};

export default UsersListItem;
