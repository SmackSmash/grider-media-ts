import { useState } from 'react';
import { useAppDispatch } from '../store';
import { addUser } from '../store';
import Button from './Button';
import { type AxiosError } from 'axios';

const Header = () => {
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [creatingUserError, setCreatingUserError] = useState<AxiosError | null>(
    null
  );

  const dispatch = useAppDispatch();

  const handleClick = () => {
    (async () => {
      setIsCreatingUser(true);
      try {
        await dispatch(addUser());
      } catch (error) {
        setCreatingUserError(error as AxiosError);
      } finally {
        setIsCreatingUser(false);
      }
    })();
  };

  return (
    <header className='flex justify-between items-center border-b-2 border-poimandres-darkgreen mb-4 pb-4'>
      <h1 className='text-2xl font-bold'>User List</h1>
      {creatingUserError ? (
        creatingUserError.message
      ) : (
        <Button success onClick={handleClick}>
          + Add User
        </Button>
      )}
    </header>
  );
};

export default Header;
