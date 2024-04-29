import UsersList from './components/UsersList';
import Button from './components/Button';
import { useAppDispatch } from './store';
import { addUser } from './store';

const App = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(addUser());
  };

  return (
    <main className='p-4 container mx-auto'>
      <header className='flex justify-between items-center border-b-2 border-poimandres-darkgreen mb-4 pb-4'>
        <h1 className='text-2xl font-bold'>User List</h1>
        <Button success onClick={handleClick}>
          Add user
        </Button>
      </header>
      <UsersList />
    </main>
  );
};

export default App;
