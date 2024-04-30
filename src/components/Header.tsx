import Button from './Button';
import { useAppDispatch } from '../store';
import { addUser } from '../store';

const Header = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addUser());
  };

  return (
    <header className='flex justify-between items-center border-b-2 border-poimandres-darkgreen mb-4 pb-4'>
      <h1 className='text-2xl font-bold'>User List</h1>
      <Button success onClick={handleClick}>
        + Add User
      </Button>
    </header>
  );
};

export default Header;
