import { useEffect } from 'react';
import UsersList from './components/UsersList';
import { fetchUsers } from './store';
import { useAppDispatch } from './store';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className='p-4 container mx-auto'>
      <UsersList />
    </main>
  );
};

export default App;
