import { addUser } from '../store';
import Button from './Button';
import useThunk from '../hooks/useThunk';

const Header = () => {
  const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const handleClick = () => {
    doAddUser();
  };

  return (
    <header className='flex justify-between items-center border-b-2 border-poimandres-darkgreen mb-4 pb-4'>
      <h1 className='text-2xl font-bold'>User List</h1>
      {creatingUserError ? (
        <span className='text-poimandres-lightpink'>
          {creatingUserError.message}
        </span>
      ) : (
        <Button success onClick={handleClick}>
          {isCreatingUser ? 'Creating...' : '+ Add User'}
        </Button>
      )}
    </header>
  );
};

export default Header;
