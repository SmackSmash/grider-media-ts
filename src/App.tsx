import UsersList from './components/UsersList';
import Button from './components/Button';

const App = () => {
  return (
    <main className='p-4 container mx-auto'>
      <Button primary>Add user</Button>
      <UsersList />
    </main>
  );
};

export default App;
