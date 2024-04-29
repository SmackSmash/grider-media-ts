import UsersList from './components/UsersList';
import Button from './components/Button';

const App = () => {
  return (
    <main className='p-4 container mx-auto'>
      <Button primary>Hello there</Button>
      <Button secondary>Hello there</Button>
      <Button success>Hello there</Button>
      <Button warning>Hello there</Button>
      <Button danger>Hello there</Button>
      <UsersList />
    </main>
  );
};

export default App;
