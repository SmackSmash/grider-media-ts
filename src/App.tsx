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
      <Button primary onClick={handleClick}>
        Add user
      </Button>
      <UsersList />
    </main>
  );
};

export default App;
