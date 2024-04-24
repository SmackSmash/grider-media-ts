import { useEffect } from 'react';
import UsersList from './components/UsersList';

const App = () => {
  useEffect(() => {}, []);
  return (
    <main className='p-4 container mx-auto'>
      <UsersList />
    </main>
  );
};

export default App;
